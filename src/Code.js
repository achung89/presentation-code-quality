import Prism from "prismjs";
import React from 'react';
export default ({code, width = "600px", style}) => <code
style={{
  display: "block",
  textAlign: "left",
  width,
  fontSize: '20px',
  margin: "auto",
  whiteSpace: "pre-wrap",
  ...style
}}
dangerouslySetInnerHTML={{
  __html: Prism.highlight(code,
  Prism.languages.javascript,
  "javascript"
) }} />