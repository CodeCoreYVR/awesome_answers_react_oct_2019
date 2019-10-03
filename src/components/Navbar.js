import React from 'react';
import { NavLink /* Link */ } from 'react-router-dom';

import CurrentDateTime from './CurrentDateTime';

function Navbar(props) {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px 30px'
			}}
		>
			{/* <a href="/questions">Questions</a> */}
			<NavLink to="/questions">Questions</NavLink>

			<CurrentDateTime />
		</nav>
	);
}

export default Navbar;
