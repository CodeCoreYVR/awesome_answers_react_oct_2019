import React from 'react';

import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import './App.css';

function App() {
	return (
		<div className="ui container">
			{/* in JSX, self-closing tags must be closed. for example <img> doesn't work */}
			{/* instead <img /> must be used */}
			<QuestionIndexPage notShowAll={false} />
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
