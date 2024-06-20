import React , {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase !" , "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase !" , "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text !" , "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text , setText] = useState('');
   
  return (
    <>
        <div className="container">
            <h3>{props.heading}</h3>
            <br />
            <div className="mb-3">
                <textarea className="form-control" value={text}  style={{backgroundColor : `${props.mode === 'light'?'white':'#212529'}` , color:`${props.mode === 'light'?'black':'white'}`}} id="my-box" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h4>Your Text Summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read </p>
            <h5>Preview</h5>
            <p>{text.length>0?text:"Nothing to preview !"}</p>
        </div>
    </>
  );

}
