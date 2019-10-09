import React, { Component } from "react";

import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import Spinner from "./Spinner";
import { Question } from "../requests";
import DeleteButton from "./DeleteButton";

// Question Show Component
class QuestionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      isLoading: true
    };
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    // All components are rendered by a Route (like this one)
    // will be given props by that Route component
    // One fo these props, called match which contains information
    // related to the pattern matched path defined in App.js
    // <Route path="/questions/:id/:test" component={QuestionShowPage}
    // match: {
    // params: {
    // id: <whatever-id-passed>,
    // test: <whatever-test-passed>
    // }
    // }
    // Because the Route looked like the one above, the Route component
    // pattern matched on the ':id', and will give us a
    // param called id within the property of match called param,
    // as used below
    Question.one(this.props.match.params.id).then(question => {
      this.setState({
        question: question,
        isLoading: false
      });
    });
  }
  deleteQuestion() {
    Question.delete(this.state.question.id).then(data => {
      this.props.history.push("/questions");
    });
  }
  deleteAnswer(answerId) {
    console.log("this: ", this);
    this.setState(state => {
      return {
        question: {
          ...state.question,
          answers: state.question.answers.filter(
            answer => answer.id !== answerId
          )
        }
      };
    });
  }
  render() {
    if (!this.state.question) {
      return <Spinner />;
    }
    // debugger;
    const { id: currentUser } = this.props.currentUser;
    const { id: author } = this.state.question.author;
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
        {currentUser === author && (
          <DeleteButton onDeleteClick={() => this.deleteQuestion()} />
        )}
        <AnswerList
          onAnswerDelete={this.deleteAnswer}
          answers={this.state.question.answers}
        />

        {/* <AnswerDetails body="Red." author={{ full_name: "Michael Owen" }} created_at={new Date()} /> */}
      </div>
    );
  }
}

export default QuestionShowPage;
