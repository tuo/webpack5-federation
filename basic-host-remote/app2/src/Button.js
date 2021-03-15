import React from "react";
import * as moment from "moment";
import "./button.css";
const Button = ({ onClick }) => (
    // <div style={{ backgroundColor: "red" }}>
    <div class="btn_wrapper">
        <p>some text in app2 button....</p>
        <h3>rendered at {moment().format()}</h3>
        <button onClick={() => onClick()}>App 2 Button</button>
    </div>
);

export default Button;
