import React from "react";
import { useState } from "react";
 function TextForm(props) {
  
  const[text,setText]=useState('')
  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase","primary")
  }
  const handleLoClick=()=>{ 
    setText(text.toLowerCase());
    props.showalert("Converted to LowerCase","primary")
  }
const handleClearClick=()=>{ 
  setText('');
  props.showalert("TextArea Cleared","danger")
}
  const handleCopy = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to clipboard","warning")
  }
  const handleExtraSpaces = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces removed","success")
  }
  function firstCap(){
    let newText = text.toLowerCase() 
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText2)
    props.showalert("First letter capital","success")
}
const vowelCheck = ()=>{
  const count = text.match(/[aeiou]/gi).length;
  alert(`You have ${count} no of vowels`)
}

  return (
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange}
          style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear the text area</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy the text area</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={firstCap}>First letter Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={vowelCheck}>Vowel Check</button>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(element=> element.length!==0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter(element=>element.length!==0).length} minutes read</p>
        <p>{text.split(/[".!?"]/).length-1} :No of Sentences</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter some text to preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
