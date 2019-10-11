import React from 'react';
import AnswerDetails from './AnswerDetails';
import '../styles/AnswerList.css';

function AnswerList(props) {
	return (
		<ul className="AnswerList">
			{props.answers.map((answer) => (
				<li className="ui segment" key={answer.id}>
					<h1>{'answer.author.full_name'}</h1>
					<AnswerDetails
						body={answer.body}
						author_fullname={'answer.author.full_name'}
						created_at={new Date(answer.created_at)}
						onDeleteClick={() => props.onAnswerDelete(answer.id)}
					/>
				</li>
			))}
		</ul>
	);
}

export default AnswerList;
