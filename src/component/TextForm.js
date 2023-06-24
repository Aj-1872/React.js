import React, {useState} from "react";



export default function TextForm(x) {
  const [text,setText] = useState('');
  const [isBold,setIsBold] = useState(false);
  var word = text.split(" ").length;
  var character = text.length;


  const handleUpClick =()=>{
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    }

    const handleLowClick=()=>{
      console.log("Lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleBoldClick=()=>{
      console.log("Bold was clicked");
      setIsBold(!isBold);
    }

    const clearText =()=>{
      console.log('clear text');
      let newText = "";
      word = 0;
      character = 0;
      setText(newText);
    }


    const handleOnChange=(event)=>{
      console.log("On change");
      setText(event.target.value);
      
    }
    

   

// text = "new text";wrong way to change
// setText("new text");correct way

  return (
    <>
    <div className="container">

      <form>
      <h3>{x.heading}</h3>
      <div className="form-floating">
           <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange} style={{ fontWeight: isBold ? 'bold' : 'normal' }}></textarea>
           <label htmlFor="floatingTextarea">{x.label}</label>
      </div>
      </form>
      
      <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary m-3" onClick={handleLowClick}> Convert to Lowercase</button>
      <button className="btn btn-primary m-3" onClick={clearText}> Clear Text</button>
   
    </div>

    <div className="container">
    <button className="btn btn-primary" onClick={handleBoldClick}> Convert to Bold</button>

    </div>

    <div className="container my-2">

      <h3>Your text summary</h3>
      <p>Words : {word} </p>
      <p>Character : {character}</p>
      <p>{((word)*0.008)} Minutes to read</p>
      <h4>Preview</h4>
      <p>{text}</p>

    </div>
    </>
  );
}

TextForm.defaultProps = {
  label: 'Textarea',
  heading: 'Enter the text to analyze'
}
