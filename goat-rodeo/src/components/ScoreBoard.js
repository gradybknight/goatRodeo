import React from "react";

const ScoreBoard = props => (
    <div className="row">
        <div className="col-md-9"> <h3>Try to click as many goats as possible without repeating one </h3></div>
        <div className="col-md-3"> So far you have clicked {props.correctCount} correctly</div>
    </div>
);

export default ScoreBoard;
