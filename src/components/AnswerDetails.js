import React from 'react';
import ShowAttribution from './ShowAttribution';
import '../styles/AnswerDetails.css';

// AnswerDetails Component
function AnswerDetails(props) {
	return (
		<div className="ui segment AnswerDetails">
			<div className="ui header">Answer Details</div>
			<p>
				{props.body} <br />
				<ShowAttribution author={props.author_fullname} created_at={props.created_at} />
			</p>
			<button className="ui right floated red button" onClick={() => props.onDeleteClick(props.id)}>
				Delete
			</button>
		</div>
	);
}

export default AnswerDetails;
