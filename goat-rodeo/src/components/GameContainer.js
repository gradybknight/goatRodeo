import React, { Component } from "react";
import ImgCard from "./ImgCard";

class GameContainer extends Component {
  state = {
    correctCount: 0,
    currentArray: [
      {
        id:0,
        name:"g00",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:1,
        name:"g01",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:2,
        name:"g02",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:3,
        name:"g03",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:4,
        name:"g04",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:5,
        name:"g05",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:6,
        name:"g06",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:7,
        name:"g07",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:8,
        name:"g08",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:9,
        name:"g09",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:10,
        name:"g10",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
      },
      {
        id:11,
        name:"g11",
        imageLink:"511ca9eed0e80603d8a0357e5d68b90b--smile-teeth-so-funny.jpg"
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
