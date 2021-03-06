import React from "react";
import ImgCard from "./ImgCard";

const GoatDisplay = props => (
    props.currentArray.map(theGoat =>{
        return (
            <ImgCard key={theGoat.name} id={theGoat.id} onClick={props.handleCardClick} imageLink={theGoat.imageLink} name={theGoat.name}/>  
        )
    })   
);

export default GoatDisplay;
