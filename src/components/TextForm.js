import React , {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
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
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read </p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
    </>
  );

}
