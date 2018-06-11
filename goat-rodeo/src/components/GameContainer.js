import React, { Component } from "react";
import ImgCard from "./ImgCard";
import GoatDisplay from "./GoatDisplay";

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

  shuffle = (array) => {
    // copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  makeGoatDisplay = () => {
    return (
      this.state.currentArray.map(theGoat =>{
        return (
            <ImgCard id={theGoat.id} onClick={this.handleCardClick} imageLink={theGoat.imageLink} />  
        )
      })   
    );
  }

  handleCardClick = event => {
    console.log(event.target);
    let newArray = this.shuffle(this.state.currentArray);
    this.setState({currentArray:newArray});
  }
  render(){
    return (
      <div> 
        <div className="row">
          <h1>Your score goes here</h1>
          <div className="row">
            <GoatDisplay currentArray={this.state.currentArray} handleCardClick={this.handleCardClick} />
          </div>
        </div>
      </div>
    )  
}
}

export default GameContainer;
