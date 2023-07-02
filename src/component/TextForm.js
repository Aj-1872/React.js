import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const wordCount = text.split(' ').filter((element)=>{return element.length!==0}).length;
  const characterCount = text.length;

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert('Converted to Uppercase', 'success');
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert('Converted to Lowercase', 'success');
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
    showAlert('Bold Text', 'success');
  };

  const clearText = () => {
    setText('');
    showAlert('Text Cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const showAlert = (message, type) => {
    props.showAlert(message, type);
  };

  return (
    <>
      <div className={`container text-${props.revMode}`}>
        <form>
          <h3>{props.heading}</h3>
          <div className="form-floating">
            <textarea
              className={`form-control bg-${props.mode}`}
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={text}
              onChange={handleOnChange}
              style={{ fontWeight: isBold ? 'bold' : 'normal', color: props.mode === 'dark' ? 'white' : 'black' }}
            ></textarea>
            <label htmlFor="floatingTextarea">{props.label}</label>
          </div>
        </form>

        <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-1" onClick={clearText}>Clear Text</button>
      </div>

      <div className="container">
        <button className="btn btn-primary m-1" onClick={handleBoldClick}>Convert to Bold</button>
      </div>

      <div className={`container my-2`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>Words: {wordCount}</p>
        <p>Characters: {characterCount}</p>
        <p>{(wordCount * 0.008).toFixed(2)} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : 'Enter Something'}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  label: 'Textarea',
  heading: 'Enter the text to analyze',
};
