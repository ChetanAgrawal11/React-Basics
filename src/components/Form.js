import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  function handle() {
    setText(text.toUpperCase());
    if (text.length > 0) {
      props.alertfun("Converted to UpperCase", "success");
    } else {
      props.alertfun("Please Enter something to convert", "warning");
    }
  }
  function handleL() {
    setText(text.toLowerCase());
    if (text.length > 0) {
      props.alertfun("Converted to LowerCase", "success");
    } else {
      props.alertfun("Please Enter something to convert", "warning");
    }
  }
  function handleC() {
    let newtext = "";
    setText(newtext);
    props.alertfun("Cleared Successfully ", "success");
  }
  function handleOnchange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="mb-3">
        <label
          for="formGroupExampleInput"
          className={`form-label text-${
            props.mode === "light" ? "dark" : "light"
          } `}
        >
          Enter the text for Converting it into Upper Case
        </label>
        <textarea
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Text"
          value={text}
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnchange}
        ></textarea>
        <button
          className={`btn btn-primary mx-2 my-3 text-${
            props.mode === "light" ? "grey" : "white"
          } `}
          onClick={handle}
        >
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleL}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleC}>
          Clear the text
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "grey" : "white"
        }`}
      >
        <p>
          Total Words:
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length > 0;
            }).length
          }
        </p>
        <p>Total Characters: {text.length}</p>
      </div>
      <p style={{ color: props.mode === "light" ? "grey" : "white" }}>
        {text.length > 0 ? text : "User has not enterned anything"}
      </p>
    </>
  );
}
