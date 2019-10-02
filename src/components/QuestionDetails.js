import React from "react";
import ShowAttribution from "./ShowAttribution";
// View Question Component
function QuestionDetails(props) {
  return (
    <div style={{ backgroundColor: "gray", color: "maroon" }}>
      <h2>{props.title}</h2>
      <p>
        {props.body} <br />
      </p>
      <p>
        <small>Seen {props.view_count} time(s)</small>
        <ShowAttribution author={props.author.full_name} created_at={props.created_at} />
      </p>
    </div>
  );
}

export default QuestionDetails;
