import React, { Component } from 'react';

import '../styles/QuestionIndexPage.css';
import questionData from './questionData';
// import DeleteButton from './DeleteButton';

class QuestionIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [ ...questionData ]
		};
	}
	deleteQuestion(id) {
		console.log('id: ', id);
		console.log('this: ', this);
		// To change 'state', you must always use 'this.setState(...)'

		// You can use setState by passing an object to its first argument.
		// When the time comes, the object will be merged with the current state

		// this.setState({
		// 	questions: this.state.questions.filter((q) => q.id !== id)
		// });
		// You can also setState by giving it a callback as first argument
		// that receives the current state and props as arguments.
		// It must return an object that will be merged with the state
		this.setState((state, props) => {
			return {
				questions: state.questions.filter((q) => q.id !== id)
			};
		});
	}
	render() {
		return (
			<main className="QuestionIndexPage">
				<h1>Questions</h1>
				<ul>
					{this.state.questions.map((question, index) => (
						<li key={index}>
							<p>
								{question.title}
								<br />
								<small>Seen {question.view_count} time(s)</small>
								<small>Created at: {new Date(question.created_at).toLocaleDateString()}</small>
								<button
									className="ui right floated red button"
									onClick={() => this.deleteQuestion(question.id)}
								>
									Delete
								</button>
								{/* <DeleteButton onDeleteClick={() => this.deleteQuestion(question.id)} /> */}
							</p>
							<p>{question.body}</p>
						</li>
					))}
				</ul>
			</main>
		);
	}
}

export default QuestionIndexPage;
