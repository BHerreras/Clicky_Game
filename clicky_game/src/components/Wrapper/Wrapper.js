import React from "react";
import "./Wrapper.css";

//simple way to create basic react components
const Wrapper = props => <div className="container wrapper d-flex flex-wrap justify-content-between">{props.children}</div>;

export default Wrapper;