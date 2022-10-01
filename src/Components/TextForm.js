import React, { useState } from "react";

export default function TextForm(props) {
  console.log(props)
  const handleOnChange = event => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const Clear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Content is clered", "success");
  };

  const toCapitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

    const Capitalize = () => {
    const wordsArray = text.split(" ");
    const convertedWordsArray = wordsArray.map(word => {
      return toCapitalize(word);
    });
    setText(convertedWordsArray.join(" "));
    props.showAlert("Converted to UpperCase", "success");
  }; 

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{backgroundColor: props.mode === "dark" ? "#251d5b" : "white" ,
            color: props.mode === "light" ? "black" : "white"}}
          >
            {" "}
          </textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
          Convert to Lower case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Capitalize}>
          Capitalize First Letter
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Clear}>
          Clear
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>Count the text</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} characters and {text.length} words </p>
        <p>Time to read text: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>

        <h2>Preview!</h2>
        <p>{text.length>0? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}