import React, { Component } from "react";
import GoatDisplay from "./GoatDisplay";
import ScoreBoard from './ScoreBoard'

class GameContainer extends Component {
  state = {
    correctCount: 0,
    clickedStatus: {
      g00:false,
      g01:false,
      g02:false,
      g03:false,
      g04:false,
      g05:false,
      g06:false,
      g07:false,
      g08:false,
      g09:false,
      g10:false,
      g11:false,
    },
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
    displayArray: [
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
    ]
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
  
  hasTheGoatBeenClicked = goatName => {
    let alreadyClicked=false;
    this.state.currentArray.map(theGoat =>{
      console.log(theGoat["name"]);
      console.log(goatName);
      if (theGoat["name"] === goatName && theGoat["clicked"]) {
        alreadyClicked=true;
      }
      return true;
    })
    return alreadyClicked;
  };

  changeTheGoatToClicked = goatName => {
    let replacementArray = this.state.currentArray.map(theGoat => {
      if (theGoat.name === goatName) {
        theGoat.clicked = true;
        return true;
      }
      return false;
    });
    this.setState({currentArray:replacementArray});
    console.log(this.state.currentArray)
  }

  handleCardClick = event => {
    // if (this.hasTheGoatBeenClicked(event.target.name)) {
    //   console.log("loser");
    // } else {
    //   console.log("change to clicked");
    //   this.changeTheGoatToClicked(event.target.name);
    // }
    let newArray = this.shuffle(this.state.displayArray);
    this.setState({displayArray:newArray});
  }
  render(){
    return (
      <div className="container"> 
          <ScoreBoard correctCount={this.state.correctCount}/>
          <div className="row">
            <GoatDisplay currentArray={this.state.displayArray} handleCardClick={this.handleCardClick} />
          </div>
      </div>
    )  
}
}

export default GameContainer;
