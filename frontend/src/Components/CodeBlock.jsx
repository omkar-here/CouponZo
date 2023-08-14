import {useState} from 'react';
import Clipboard from "clipboard";
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css'; // Use the GitHub theme
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const CodeBlock = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const highlightedCode = hljs.highlightAuto(code).value;
   const handleClickCopy = () => {
    const clipboard = new Clipboard('.copy-button', {
      text: () => code,
    });
    
    clipboard.on('success', () => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500); // Reset "Copied" status after 1.5 seconds
      clipboard.destroy();
    });
    
    clipboard.on('error', () => {
      clipboard.destroy();
    });
    
    clipboard.onClick({ trigger: document.querySelector('.copy-button') });
  };
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      <button
        className="copy-button bg-blue-500 text-white px-2 py-1 rounded mt-2"
        onClick={handleClickCopy}
      >
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </pre>
  );
};

export default CodeBlock;
