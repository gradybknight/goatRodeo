import React from "react";

const ScoreBoard = props => (
    <div className="row">
        <div className="col-md-9"> <h2>Try to click as many goats as possible without repeating one </h2></div>
        <div className="col-md-3"> <h3>So far you have clicked {props.correctCount} correctly </h3></div>
    </div>
);

export default ScoreBoard;
