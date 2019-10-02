import React from "react";

import QuestionShowPage from "./components/QuestionShowPage";
import "./App.css";

const numbers = [1, 2, 3, 4];

function App() {
  return (
    <div className="ui container">
      {/* in JSX, self-closing tags must be closed. for example <img> doesn't work */}
      {/* instead <img /> must be used */}
      <QuestionShowPage />
      {/* We can use map to generate lists */}
      {/* {numbers.map(number => (
        <QuestionShowPage key={number} number={number} />
      ))} */}
    </div>
  );
}

// A react Component is a function that returns a React Element.
// By convention, react components use PascalCase naming
// Components whose names does not begin with a capital letter
// will be interpreted as plain HTML tags

export default App;
// module.exports = App;
