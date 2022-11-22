import './App.css';
import React, { useRef, useEffect, useState } from "react";
import markdownToDelta from "markdown-to-quill-delta";


function App() {

  const [result, setResult] = useState('');

  useEffect(() => {

  })

  const textInput = useRef(null);

  function convert() {
    const ops = markdownToDelta(textInput.current.value);
    console.info("ops: ", JSON.stringify(ops))
    setResult(JSON.stringify(ops))
  }


  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ width: "50%", minHeight: 200, }}>
        <label for="editor">Convert your markdown to Delta</label>
        <textarea name="editor" ref={textInput} style={{ width: "100%", minHeight: 200, }} />
        <button onClick={convert}>提交</button>
      </div>
      <div style={{ width: 10 }}></div>
      <div style={{ width: "50%", minHeight: 200, }} >
        {result}
      </div>
    </div >
  );
}

export default App;
