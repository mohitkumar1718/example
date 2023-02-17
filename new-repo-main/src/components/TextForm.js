import React,{useState} from 'react'

export default function TextForm(props) {

const handleOnClick=()=>{
console.log("uppercase was clicked"+  text);
let newText=text.toUpperCase();
SetText(newText);
props.showAlert("Converted to UpperCase","success")
}
const handleOnloClick=()=>{
    console.log("lower case was clicked"+  text);
    let newText=text.toLocaleLowerCase();
    SetText(newText);
    props.showAlert("Converted to LowerCase","success")
    }
const handleOnClearClick=()=>{
    console.log("text cleared");
    let newText=" ";
    SetText(newText);
    props.showAlert("Text Cleared","success")
    }


const handleOnChange=(event)=>{
    // console.log("on change");
    SetText(event.target.value)

}
const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success")
}
const handleremovespace=()=>{
    let newtext=text.split(/[ ]+/);
    SetText(newtext.join(" "))
    props.showAlert("Extra spaces Removed","success")
}

    const[text,SetText]=useState("Enter your text here")
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"#042743",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to UpperCase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnloClick}>Convert to LowerCase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnClearClick}>Clear Text</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleremovespace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
<h1> Your text summary here</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length} Minutes you take to read these words </p>
<h2>Preview</h2>
<p> {text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
    
  )
}
