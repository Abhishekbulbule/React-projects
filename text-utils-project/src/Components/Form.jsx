import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UpperCase", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    var t = document.getElementById("myBox");
    navigator.clipboard.writeText(t.value);
    props.showAlert("Copyed text", "success");
  };

  const handlePaste = async () => {
    const a = await navigator.clipboard.readText();
    const t = (document.getElementById("myBox").value += a);
    setText(t);
    props.showAlert("Pasted text", "success");
  };

  const handleExtraSpaces = (e) => {
    // let words = text
    //   .split(" ")
    //   .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    //   .join(" ");
    let words = text.split(/[ ]+/);
    setText(words.join(" "));
    props.showAlert("Cleared extra spaces", "success");
  };

  // const handleFirstUpClick = (e) => {
  //   let words = text.split(" ");
  //   let newt = "";
  //   words.forEach((ele) => {
  //     if (ele[0] !== undefined) {
  //       newt += ele + " ";
  //     }
  //   });
  //   setText(newt);
  //   // props.showAlert("Converted first letter to captital", "success");
  // };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container ">
        <div className=" d-flex flex-wrap   justify-content-center">
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control m-3 bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="myBox"
            value={text}
            placeholder="Enter a text"
            onChange={handleOnChange}
            rows="8"
          ></textarea>

          <button
            className="btn btn-outline-success  fw-bold mt-3 mx-1"
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn  btn-outline-success  fw-bold mt-3 mx-1"
            onClick={handleDownClick}
            disabled={text.length === 0}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn  btn-outline-success  fw-bold mt-3 mx-1"
            disabled={text.length === 0}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn  btn-outline-success  fw-bold mt-3 mx-1"
            disabled={text.length === 0}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn  btn-outline-success  fw-bold mt-3 mx-1"
            disabled={text.length === 0}
            onClick={handleCopy}
          >
            Copy text
          </button>
          <button
            className="btn  btn-outline-success fw-bold mt-3 mx-1"
            onClick={handlePaste}
            disabled={text.length === 0}
          >
            Paste text
          </button>
        </div>
        <div className="my-3 row">
          <div className="col-6">
            <h1>Your text Summary</h1>
            <p>
              {/* {text.split(" ").length === 1 && text.length === 0
                ? "0"
                : text.split(" ").length}{" "} */}
              {
                text.split(/\s+/).filter((elem) => {
                  return elem.length !== 0;
                }).length
              }
              words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length}Minutes read</p>
          </div>
          <div className="col-6">
            <h2>Preview</h2>
            <p>{text === "" ? "Nothing to Preview" : text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
