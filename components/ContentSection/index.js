import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

<<<<<<< HEAD
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
=======
const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
>>>>>>> cbb8909f25c76a5b6205c56e6dcea70a557eaeb1
};

const ContentSection = ({ content }) => {
  return (
<<<<<<< HEAD
      <ReactMarkdown components={{ code: CodeBlock }} className='markdown-class'>
        {content}
      </ReactMarkdown>
=======
    <ReactMarkdown components={CodeBlock} className="markdown-class">
      {content}
    </ReactMarkdown>
>>>>>>> cbb8909f25c76a5b6205c56e6dcea70a557eaeb1
  );
};

export default ContentSection;
