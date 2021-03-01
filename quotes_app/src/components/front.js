import React from "react";
import "../assets/quotes.css"
const Front = (props) => {
  return (
    <div>
      <blockquote
        className="quote-box"
        // הסוגריים הראושנים זה כדי לומר שזה  ג'י אס איקס
        // והשני הוא עוד סוגרים
        style={{
          background: "url(" + props.background + ")",
          width: "300px",
          height: "300px",
          border: "2px solid red",
          backgroundSize: "cover",
        }}
      >
        <p className="quotation-mark">“</p>
        {props.quote}
      </blockquote>
    </div>
  );
};

export default Front;
