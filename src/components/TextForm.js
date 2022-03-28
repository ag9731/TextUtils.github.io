import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('');
    const handleUpClick= ()=>{
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
    }
    const handleLwClick= ()=>{
      console.log("LowerCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText); 
      props.showAlert("Converted to LowerCase","success");
    }
    const handleClear=()=>{
      console.log("Clear was clicked" + text);
      let newText = '';
      setText(newText);
      props.showAlert("Clear was clicked","success");
    }
    const handleCopy=()=>{
      console.log("Copy was clicked");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark'?'white':'white' , color: props.mode==='dark'?'black':'#042743'}} 
  id="myBox" rows="6"></textarea>
</div>
<div className="container">
<button className="btn-btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>&nbsp;&nbsp;&nbsp;
<button className="btn-btn-primary" onClick={handleLwClick}>Convert to Lower Case</button>&nbsp;&nbsp;&nbsp;
<button className="btn-btn-primary" onClick={handleClear}>Clear The Text</button>&nbsp;&nbsp;&nbsp; 
<button className="btn-btn-primary" onClick={handleCopy}>Copy The Text</button>&nbsp;&nbsp;&nbsp; 

</div>
    </div>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h1>your text summary</h1>
       <p>{text.split(" ").length} {text.length} characters</p>     
       <h2>Preview</h2>
       <p>{text}</p> 
    </div>
    </>
  )
}
