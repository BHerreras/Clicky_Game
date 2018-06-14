import React from "react";
import "./pics.css";

const pics = props => (
	<div className="card">
		<div className="card-body">
			<img className="img-fluid" onClick={props.onClick} alt={props.name} src={props.image} />
		</div>
	</div>
);

export default pics;