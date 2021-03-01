import React from "react";

const Form = (props) => {
  return (
    <div>
      <label>New quote&nbsp;</label>
      <br />
      <textarea
        className="purple-border"
        style={{
          resize: "both",
          overflow: "auto",
          width: "400px",
          rows: "1",
        }}
        placeholder="type your quote here"
      />

      <br />

      <label>Quote Author&nbsp;</label>
      <br />
      <textarea
        className="purple-border"
        style={{
          resize: "both",
          overflow: "auto",
          width: "400px",
          rows: "1",
        }}
        placeholder="type your quote here"
      />
      <br />

      <label>Background image&nbsp;</label>
      <br />
      <textarea
        className="purple-border"
        style={{
          resize: "both",
          overflow: "auto",
          width: "400px",
          rows: "1",
        }}
        placeholder="type your quote here"
      />
<br />
      <button className="btn btn-primary">add new quote</button>
    </div>
  );
};

export default Form;
