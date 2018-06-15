import React from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Pics from "./components/pics";
import pic from "./images.js";

class App extends React.Component {

  state = {
    pic,
    score: 0,
    chosen: []
  };

  //From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
  handleShuffle = () => {
    const pics = this.state.pic;
    for (let i = pics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pics[i], pics[j]] = [pics[j], pics[i]];
    }
    this.setState({
      pic: pics
    })
  };

  handleClick = e => {
    const chosenId = e.target.id
    const chosenArr = this.state.chosen;
    if (this.state.chosen.includes(chosenId)) {
      alert("Wrong Gues, Try Again");
      this.setState({
        score: 0,
        chosen: []
      })
    } else {
      chosenArr.push(chosenId);
      this.setState({
        score: this.state.score + 1,
        chosen: chosenArr
      })
      if (this.state.score === 12) {
        alert("Game Won!");
        this.setState({
          score: 0,
          chosen: []
        })
      }
    }
    this.handleShuffle();
  }

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron score={this.state.score} />
        <Wrapper>
          {this.state.pic.map(p => (
            <Pics
              id={p.id}
              key={p.id}
              name={p.name}
              image={p.image}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;