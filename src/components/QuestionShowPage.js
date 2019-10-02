import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

// Question Show Component
function QuestionShowPage(props) {
  return (
    <div>
      <h1>Question Number {props.number}</h1>
      <QuestionDetails
        title="What is your favorite color?"
        body="Red, white, blue, green, orange, yellow"
        view_count={10}
        author={{ full_name: "Eden Hazard" }}
        created_at={new Date()}
      />
      <AnswerDetails body="Red." author={{ full_name: "Michael Owen" }} created_at={new Date()} />
    </div>
  );
}
export default QuestionShowPage;
