import React, { useState } from "react";

export default function About(props) {

  return (
    <div div className="container">
      <h2 className="my-3" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.mode == 'light' ? 'white' : '#282152', color: props.mode == 'light' ? 'black' : 'white' }}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(27 22 62)', color: props.mode == 'light' ? 'black' : 'white' }}>
              <strong>Use Text Utils to quickly and easily analyze your text. There is a word and a character counter </strong>

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode == 'light' ? 'white' : '#282152', color: props.mode == 'light' ? 'black' : 'white' }}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(27 22 62)', color: props.mode == 'light' ? 'black' : 'white' }} >
              <strong>Text utils is a free text counter application that provides instant word and character counts for any given text. Textutils reports the number of characters and words. The limit of words/characters, therefore, makes it suitable</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode == 'light' ? 'white' : '#282152', color: props.mode == 'light' ? 'black' : 'white' }}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(27 22 62)', color: props.mode == 'light' ? 'black' : 'white' }}>
              <strong>The word counter software works in web browsers such as Chrome, Firefox, Internet Explorer, Edge, Safari, etc. For example, it used to count Facebook characters, blogs, and books.</strong>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
