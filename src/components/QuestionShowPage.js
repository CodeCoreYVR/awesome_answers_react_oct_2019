import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import questionData from './questionData';
import oneQuestionData from './oneQuestionData';
import DeleteButton from './DeleteButton';

// Question Show Component
class QuestionShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: { ...oneQuestionData }
		};
		this.deleteAnswer = this.deleteAnswer.bind(this);
	}
	deleteQuestion() {
		this.setState({
			question: null
		});
	}
	deleteAnswer(answerId) {
		console.log('this: ', this);
		this.setState((state) => {
			return {
				question: {
					...state.question,
					answers: state.question.answers.filter((answer) => answer.id !== answerId)
				}
			};
		});
	}
	render() {
		if (!this.state.question) {
			return (
				<main>
					<h1>Question Does not exist</h1>
				</main>
			);
		}
		return (
			<div>
				<h1>Question Number {this.props.number}</h1>
				<QuestionDetails
					// title={this.state.question.title}
					// body={this.state.question.body}
					// view_count={this.state.question.view_count}
					// author={this.state.question.full_name}
					// created_at={this.state.question.created_at}
					{...this.state.question}
				/>
				<DeleteButton onDeleteClick={() => this.deleteQuestion()} />
				<AnswerList onAnswerDelete={this.deleteAnswer} answers={this.state.question.answers} />

				{/* <AnswerDetails body="Red." author={{ full_name: "Michael Owen" }} created_at={new Date()} /> */}
			</div>
		);
	}
}

export default QuestionShowPage;
