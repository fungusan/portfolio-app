import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => (
    <pre className={`rounded-lg overflow-x-auto p-4 my-4 ${className || ''}`}>
        <code>{children}</code>
    </pre>
);

export default CodeBlock;