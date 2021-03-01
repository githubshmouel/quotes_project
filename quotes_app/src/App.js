import React from "react";

import data from "./assets/data";
import Board from "./components/board";
import Form from "./components/form";
function App() {
  return (
    <div className="App">
      <h1 className="display-4"> welcome to react </h1> 
      <Form />
      <Board data={data} />
    </div>
  );
}

export default App;
