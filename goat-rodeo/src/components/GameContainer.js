import React, { Component } from "react";
import ImgCard from "./ImgCard";

class GameContainer extends Component {
  state = {
    correctCount: 0,
    currentArray: [
      {
        id:0,
        name:"g00",
        clicked:false,
        imageLink:require("../Assets/brown.jpg")
      },
      {
        id:1,
        name:"g01",
        clicked:false,
        imageLink:require("../Assets/fence.jpg")
      },
      {
        id:2,
        name:"g02",
        clicked:false,
        imageLink:require("../Assets/hair.jpg")
      },
      {
        id:3,
        name:"g03",
        clicked:false,
        imageLink:require("../Assets/nostrils.jpg")
      },
      {
        id:4,
        name:"g04",
        clicked:false,
        imageLink:require("../Assets/smile.jpg")
      },
      {
        id:5,
        name:"g05",
        clicked:false,
        imageLink:require("../Assets/smirk.jpg")
      },
      {
        id:6,
        name:"g06",
        clicked:false,
        imageLink:require("../Assets/teeth.jpg")
      },
      {
        id:7,
        name:"g07",
        clicked:false,
        imageLink:require("../Assets/tongue.jpg")
      },
      {
        id:8,
        name:"g08",
        clicked:false,
        imageLink:require("../Assets/underbite.jpg")
      },
      {
        id:9,
        name:"g09",
        clicked:false,
        imageLink:require("../Assets/white.jpg")
      },
      {
        id:10,
        name:"g10",
        clicked:false,
        imageLink:require("../Assets/whitetongue.jpg")
      },
      {
        id:11,
        name:"g11",
        clicked:false,
        imageLink:require("../Assets/yawn.jpg")
      },

    ],
  };

  handleCardClick = event => {
    console.log(event.target.id);
  }
  render(){
    return (
      this.state.currentArray.map(theGoat =>{
        return (
            <ImgCard id={theGoat.id} onClick={this.handleCardClick} imageLink={theGoat.imageLink} />  
        )
      })   
    );
  }
}

export default GameContainer;
