import React from 'react';
import ReactMarkdown from 'react-markdown';
// The ESM `light` build provides a default export (not a named `Light`).
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';

// Register the Python language with the light build
SyntaxHighlighter.registerLanguage('python', python);
// Use a highlight.js-compatible style located under styles/hljs
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Problem.css';

const copyToClipboard = async (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) { return false; }
  }
  // Fallback
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); document.body.removeChild(ta); return true; } catch (e) { document.body.removeChild(ta); return false; }
};

const PreBlock = ({ node, children }) => {
  // children is typically an array with a single <code> element
  const child = Array.isArray(children) ? children[0] : children;
  // If child is a code element, it will have props including className and children
  const className = child && child.props ? child.props.className : '';
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : 'text';
  const codeString = child && child.props ? String(child.props.children).replace(/\n$/, '') : '';

  // Render the highlighted block directly (no extra <pre> from ReactMarkdown)
  const [copied, setCopied] = React.useState(false);
  const onCopy = async () => {
    const ok = await copyToClipboard(codeString);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div style={{position:'relative'}}>
      <div style={{position:'absolute', right:8, top:8, zIndex:2, display:'flex', gap:8, alignItems:'center'}}>
        {copied && <div className="code-toolbar-tooltip">Copied</div>}
        <button className="btn" onClick={onCopy}>Copy</button>
      </div>
      <SyntaxHighlighter language={lang} style={github}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

const Problem = ({ title, problemDescription, solutionCode, explanation, content }) => {
  return (
    <div className="problem-container">
      <h2>{title}</h2>

      {/* If a single markdown `content` is provided, render it entirely (includes code blocks). */}
      {content ? (
        <div className="problem-section">
          <ReactMarkdown components={{ pre: PreBlock }}>{content}</ReactMarkdown>
        </div>
      ) : (
        <>
            <div className="problem-section">
            <h3>Problem Description</h3>
            <ReactMarkdown components={{ pre: PreBlock }}>{problemDescription}</ReactMarkdown>
          </div>
          <div className="problem-section">
            <h3>Solution</h3>
            <SyntaxHighlighter language="python" style={github}>
              {solutionCode}
            </SyntaxHighlighter>
          </div>
          <div className="problem-section">
            <h3>Explanation</h3>
            <ReactMarkdown components={{ pre: PreBlock }}>{explanation}</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Problem;
