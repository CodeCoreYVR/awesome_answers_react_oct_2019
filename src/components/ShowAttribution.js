import React from "react";

// ShowAttribution
function ShowAttribution(props) {
  return (
    <small>
      By: {props.author} - Created {props.created_at.toLocaleDateString()}
    </small>
  );
}

export default ShowAttribution;
