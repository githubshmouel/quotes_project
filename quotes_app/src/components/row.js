import React from "react";
import Quote from "./quote";
const Row = (props) => {
  const data = props.data;
  return (
    <div className="row">
      {data.map((quote) => {
        return <Quote 
        key={quote.id}
         id={quote.id}
          background={quote.bg}
           quote={quote.quote}
            author={quote.author}
              rating={quote.rating} />;
      })}
    </div>
  );
};

export default Row;
