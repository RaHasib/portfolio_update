import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ inline, className, children }) => {
    const match = /language-(\w+)/.exec(className || '');
    let language;
    if (match) {
        language = match[1]
    } else {
        language = 'javascript'; // Default language can be specified here.
    }
    return !inline ? (
        <SyntaxHighlighter style={dracula} language={language} PreTag="div" >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} >
            {children}
        </code>
    );
};

const ContentSection = ({ content }) => {
  return (
      <ReactMarkdown components={{ code: CodeBlock }} className='markdown-class'>
        {content}
      </ReactMarkdown>
  );
};

export default ContentSection;
