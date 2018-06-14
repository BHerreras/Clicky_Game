import React from 'react';

const Jumbotron = props => (
	<div className="jumbotron text-center">
		<h1 className="display-1"> Score: {props.score} </h1>
	</div>
);

export default Jumbotron;