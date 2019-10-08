import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/QuestionIndexPage.css";
import NewQuestionForm from "./NewQuestionForm";
import Spinner from "./Spinner";
import { Question } from "../requests";
// import DeleteButton from './DeleteButton';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initially the list of questions is empty until we fetch
      // them from server
      questions: [],
      // Initially, before we have fetched the questions
      // from the server, we will display a loader(spinner)
      // and once we have fetched the questions, we will change
      // the isLoading property to 'false',
      // and display the list of questions
      isLoading: true
    };
    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    // 1. Fetch All the questions here
    // 2. update state questions with the questions that you get back from awesome answers rails
    // 3. change isLoading to false

    // When the QuestionIndexPage component is mounted,
    // we will fetch all of the questions from the server
    Question.all().then(questions => {
      this.setState({
        questions: questions,
        isLoading: false
      });
    });
  }
  createQuestion(params) {
    // When our new question is submitted,
    // send the form data in a fetch request to the server
    Question.create(params).then(question => {
      // This is how you do navigation using react-router-dom
      // The 'Route' component gives all components that it renders
      // (like this one) a prop named 'history'
      // This prop is an array-like structure that keeps track of
      // the entire navigation history within the app
      // To navigate to a new path, we use the 'push' method
      // to push a new path onto this history array-like thing
      this.props.history.push(`/questions/${question.id}`);
    });
  }
  deleteQuestion(id) {
    console.log("id: ", id);
    console.log("this: ", this);
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
        questions: state.questions.filter(q => q.id !== id)
      };
    });
  }
  render() {
    if (!this.state.questions) {
      return <Spinner />;
    }
    const fileredQuestion = this.state.questions.filter((q, index) => {
      if (this.props.notShowAll || index < 5) {
        return true;
      }
      return false;
    });
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <NewQuestionForm onCreateQuestion={this.createQuestion} />
        <ul>
          {fileredQuestion.map((question, index) => (
            <li key={index}>
              <p>
                <Link to={`/questions/${question.id}`}>{question.title}</Link>
                <br />
                <small>Seen {question.view_count} time(s)</small>
                <small>
                  Created at:{" "}
                  {new Date(question.created_at).toLocaleDateString()}
                </small>
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
