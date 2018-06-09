import React from "react";

const ImgCard = props => (
  <div id={props.id}>
    <img src={props.imageLink} className="rounded" alt="goat" onClick={props.onClick} id={props.id}/>
  </div>
);

export default ImgCard;
