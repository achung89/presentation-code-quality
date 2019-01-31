import Prism from "prismjs";
import React from 'react';
export default ({code, width = "600px"}) => <code
style={{
  display: "block",
  textAlign: "left",
  width,
  margin: "auto",
  whiteSpace: "pre-wrap"
}}
dangerouslySetInnerHTML={{
  __html: Prism.highlight(code,
  Prism.languages.javascript,
  "javascript"
) }} />