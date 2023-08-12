import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
hljs.registerLanguage("javascript", javascript);

const CodeBlock = ({ code }) => {
  const highlightedCode = hljs.highlightAuto(code).value;

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

export default CodeBlock;
