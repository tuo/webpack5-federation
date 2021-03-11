import React from "react";
import * as moment from "moment";
//
const Button = ({ onClick }) => (
    <div style={{ backgroundColor: "red" }}>
        <p>some text in app2 button....</p>
  		<h3>rendered at {moment().format()}</h3>      
        <button onClick={() => onClick()}>App 2 Button</button>
    </div>
);

export default Button;
