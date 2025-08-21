import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlogBySlug } from '../../lib/blogUtils';
import BlogLayout from '../../components/BlogComponents/BlogLayout/BlogLayout';
import MarkdownRenderer from '../../components/BlogComponents/MarkdownRenderer/MarkdownRenderer';
import LoadingPage from './LoadingPage';
import ErrorPage from '../ErrorPage/ErrorPage';

interface Blog {
    slug: string;
    meta: { imagePath: string; imageName: string; title: string; date: string; excerpt: string; tags: string[]; };
    content: string;
}

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) {
                setError('No slug provided');
                setLoading(false);
                return;
            }

            try {
                const b = await getBlogBySlug(slug);
                if (!b) {
                    setError('Blog post not found');
                } else {
                    setBlog(b);
                }
            } catch (err) {
                setError('Error loading blog post');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) return <LoadingPage />;
    if (!blog) return <ErrorPage errorCode="404" message="Blog post not found" />;
    if (error) return <ErrorPage errorCode="Error" message={error} />;
    
    return (
        <BlogLayout meta={blog.meta}>
            <MarkdownRenderer content={blog.content} />
        </BlogLayout>
    );
};

export default BlogPost;