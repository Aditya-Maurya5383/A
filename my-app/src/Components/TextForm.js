import React, {useState} from 'react'


export default function TextForm(props) {
  const UpClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
  }
  const LoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLocaleLowerCase();
      setText(newText)
  }
  const ClearClick =()=>{
    let newText = '';
    setText(newText)
  }
  const HandleOnChange = (event)=>{
      // console.log("Onchange");
      setText(event.target.value)
  }
  const [text, setText] = useState('');
  
  return (
    <>
    <div style={{color:props.mode==='dark'?'#fff':'#000'}}>
      <div className="mb-3">
        <h4>{props.heading} </h4>
        <textarea  value={text} className="form-control"onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'#fff',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="4"></textarea>
      
      </div>
      <button className="btn btn-primary mx-2" onClick={UpClick} >Convert To Uppercase</button>
      <button className="btn btn-primary mx-2 my-3" onClick={LoClick} >Convert To Lowercase</button>
      <button className="btn btn-danger mx-2" onClick={ClearClick} >Clear Text</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'#fff':'#000'}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
    </>
  )
}


