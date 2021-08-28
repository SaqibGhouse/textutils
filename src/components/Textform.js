import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Converted to uppercase', 'success')
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Converted to lowercase', 'success')
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(' Text cleared', 'success')
  };
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert(' Copied to clipboard', 'success')
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(' Extra spaces are removed', 'success')
  }
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>

      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <div className="mb-3">
          <h1 className='mb-4'>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handelOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#042e5278' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To Lower Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="contatiner my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element) => { return element.length }).length} words and {text.length} letters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
