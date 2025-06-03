import { useState } from 'react';

const CodeSnippet = ({ code, language = 'javascript', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet-wrapper">
      {title && (
        <div className="code-header">
          <span className="code-title">{title}</span>
          <button 
            onClick={handleCopy}
            className="copy-button"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <pre className="code-block">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet; 