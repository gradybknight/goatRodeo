import React from "react";

const ImgCard = props => (
  <div id={props.id} className="col-md-3">
    <img src={props.imageLink} name={props.name} className="rounded" alt="goat" onClick={props.onClick} id={props.id} height="250px" width="250 px"/>
  </div>
);

export default ImgCard;
