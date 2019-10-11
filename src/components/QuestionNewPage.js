import React, { Component } from "react";

import NewQuestionForm from "./NewQuestionForm";
import { Question } from "../requests";

export default class QuestionNewPage extends Component {
constructor(props){
  super(props);
  this.state={
    error:[]
  }
  this.createQuestion =this.createQuestion.bind(this);
}
  createQuestion = params => {
    // When our new question is submitted,
    // send the form data in a fetch request to the server
    Question.create(params).then(question => {
      if(question.errors){
        // deal with validation errors
        // this.setState({error: question.errors});

        this.setState({
          errors: Object.keys(question.errors).map(errorKey => {
              return {
                  field: errorKey,
                  message: question.errors[errorKey].join(", ")
              };
          })
      });
      } else {
      // This is how you do navigation using react-router-dom
      // The 'Route' component gives all components that it renders
      // (like this one) a prop named 'history'
      // This prop is an array-like structure that keeps track of
      // the entire navigation history within the app
      // To navigate to a new path, we use the 'push' method
      // to push a new path onto this history array-like thing
      this.props.history.push(`/questions/${question.id}`);
      }

    });
  };

  render() {
    return (
      <main>
        <div className="header">Ask a Question</div>
        <NewQuestionForm  errors={this.state.errors} onCreateQuestion={this.createQuestion} />
      </main>
    );
  }
}
