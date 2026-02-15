import fm from 'front-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
// import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

const blogModules = import.meta.glob('/src/blogs/*.md', { query: '?raw', import: 'default', eager: true });

export interface BlogData {
    slug: string;
    meta: { imagePath: string; imageName: string; title: string; date: string; excerpt: string; tags: string[]; };
    content: string;
}

export const getBlogData = (): BlogData[] => {
    const blogs = Object.entries(blogModules).map(([filePath, rawContent]) => {
        const slug = filePath.split('/').pop()?.replace('.md', '') || '';

        if (!slug) {
            console.error(`Invalid slug for file: ${filePath}`);
            return null;
        }

        try {
            const parsed = fm(rawContent as string);
            const data = parsed.attributes as any;
            if (!data.imagePath || !data.imageName || !data.title || !data.date || !data.excerpt) {
                console.error(`Missing required frontmatter(s) in ${filePath}`);
                return null;
            }

            return {
                slug,
                meta: data as { imagePath: string; imageName: string; title: string; date: string; excerpt: string; tags: string[]; },
                content: parsed.body,
            };
        } catch (err) {
            console.error(`Error parsing frontmatter for ${filePath}:`, err);
            return null;
        }
    }).filter((blog): blog is BlogData => blog !== null);

    return blogs;
};

export const getAllBlogSlugs = (): string[] => {
    const slugs = getBlogData().map((blog) => blog.slug);
    return slugs;
};

export const getBlogBySlug = async (slug: string) => {
    const blogs = getBlogData();
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) {
        console.error(`Blog not found for slug: ${slug}`);
        return null;
    }

    try {
        const processedContent = await processMarkdown(blog.content);
        return {
            slug,
            meta: blog.meta,
            content: processedContent,
        };
    } catch (err) {
        console.error(`Error processing Markdown for slug: ${slug}`, err);
        return null;
    }
};

const processMarkdown = async (content: string) => {
  try {
    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeHighlight, {
        ignoreMissing: true,
        aliases: {
          javascript: ['js', 'jsx'],
          typescript: ['ts', 'tsx'],
          shell: ['bash', 'sh', 'zsh'],
        },
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);
      
    return result.toString();
  } catch (err) {
    console.error('Error processing Markdown:', err);
    throw err;
  }
};