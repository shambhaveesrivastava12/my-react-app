import React, {useState} from 'react'

export default function TextForm(props) {
  const convertUptext = () =>{
    // console.log("UpperCase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const convertLotext = () =>{
    // console.log("LowerCase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const convertClear = () =>{
    // console.log("LowerCase was clicked" + text);
    let newtext = '';
    setText(newtext);
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
    <div className="container">
      <form>
      <h1>{props.heading}</h1>
          <div className="mb-3">
            <input type="text" className="form-control" value = {text} onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <button type="submit" className="btn btn-primary mx-2" onClick ={convertUptext}>Convert to UpperCase</button>
          <button type="submit" className="btn btn-primary mx-2" onClick ={convertLotext}>Convert to LowerCase</button>
          <button type="submit" className="btn btn-primary mx-2" onClick ={convertClear}>Clear text</button>
          <button type="submit" className="btn btn-primary mx-2" onClick ={convertReverse}>Reverse text</button>

        </form>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length - 1} words {text.length} characters </p>
      <p>{ 0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
