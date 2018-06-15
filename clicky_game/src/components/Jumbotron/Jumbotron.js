import React from 'react';

const Jumbotron = props => (
	<div className="jumbotron text-left">
		<h1 className="display-1"> Score: {props.score} </h1>
		<div className="jumbotron text-right">
			<h1 className="display-1"> High Score: {props.highscore} </h1>
		</div>
	</div>
);

export default Jumbotron;