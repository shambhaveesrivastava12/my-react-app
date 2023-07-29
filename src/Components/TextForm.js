import React, {useState} from 'react'

export default function TextForm(props) {
  const convertUptext = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase", "success");
  }
  const convertLotext = () =>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase", "success");
  }
  const convertClear = () =>{
    let newtext = '';
    setText(newtext)
    props.showAlert("Text cleared", "warning");
  }
  const convertReverse = () =>{
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#161616':'white', color: props.mode==='dark'?'white':'#161616'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUptext}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertLotext}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertReverse}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters </p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
