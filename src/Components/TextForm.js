import React, {useState} from 'react'

export default function TextForm(props) {
  const convertUptext = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
  }
  const convertLotext = () =>{
    // console.log("LowerCase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const convertClear = () =>{
    // console.log("LowerCase was clicked" + text);
    let newtext = '';
    setText(newtext)
  }
  const convertReverse = () =>{
    // console.log("LowerCase was clicked" + text);
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
  };
  const handleOnChange = (event) =>{
    // console.log("Onchange was clicked");
    setText(event.target.value);
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
          <button type="submit" className="btn btn-primary mx-2" onClick ={convertReverse}>Reverse text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length - 1} words {text.length} characters </p>
      <p>{ 0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preview it!'}</p>
    </div>
    </>
  )
}
