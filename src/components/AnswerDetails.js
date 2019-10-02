import React from "react";
import ShowAttribution from "./ShowAttribution";
import "../styles/AnswerDetails.css";

// AnswerDetails Component
function AnswerDetails(props) {
  return (
    <div className="ui segment AnswerDetails">
      <div className="ui header">Answer Details</div>
      <p>
        {props.body} <br />
        <ShowAttribution author={props.author.full_name} created_at={props.created_at} />
      </p>
    </div>
  );
}

export default AnswerDetails;
