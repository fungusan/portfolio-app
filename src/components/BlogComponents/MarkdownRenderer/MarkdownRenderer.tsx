import React from 'react';
import 'katex/dist/katex.min.css'; // For math rendering
import 'highlight.js/styles/github.min.css'; // For syntax highlighting

interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
    <article className="markdown">
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
);

export default MarkdownRenderer;