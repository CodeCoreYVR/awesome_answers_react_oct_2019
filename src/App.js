import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<Router>
			<div className="ui container">
				<Navbar />
				<Route path="/" exact component={QuestionIndexPage} />
				<Route path="/questions" component={QuestionIndexPage} />
				<Route path="/questions/:id" component={QuestionShowPage} />
			</div>
		</Router>
	);
}

// A react Component is a function that returns a React Element.
// By convention, react components use PascalCase naming
// Components whose names does not begin with a capital letter
// will be interpreted as plain HTML tags

export default App;
// module.exports = App;

{
	/* We gonna create a Navbar */
}
{
	/* in JSX, self-closing tags must be closed. for example <img> doesn't work */
}
{
	/* instead <img /> must be used */
}
{
	/* We can use map to generate lists */
}
{
	/* {numbers.map(number => (
			<QuestionShowPage key={number} number={number} />
		))} */
}
