import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    spiceLevel: 0,
    spiceKeyword:"Nice"
  };

  changeSpice = (operator) => {
    let newSpiceLevel = this.state.spiceLevel;
    let newSpiceKeyword = this.state.spiceKeyword;
    if (operator) {
      newSpiceLevel += 1;
    } else {
      newSpiceLevel -= 1;
    }
    if (newSpiceLevel < 2){
      newSpiceKeyword = "Nice"
    }
    if (newSpiceLevel >= 2 && newSpiceLevel < 5){
      newSpiceKeyword = "Start Mopping Your Brow"
    }
    if (newSpiceLevel >= 5 && newSpiceLevel < 10){
      newSpiceKeyword = "Watch Out"
    }
    if (newSpiceLevel >= 10 && newSpiceLevel < 15){
      newSpiceKeyword = "Are you sure?"
    }
    if (newSpiceLevel >= 15 && newSpiceLevel < 20){
      newSpiceKeyword = "All Guarantees are Void"
    }
    if (newSpiceLevel > 19){
      newSpiceKeyword = "May Cause upset Stomach"
    }
    this.setState({ spiceLevel: newSpiceLevel, spiceKeyword: newSpiceKeyword });
  };

  render() {
    return (
      <div className="App">
        <h1>All Hail the Salad King </h1>
        <button onClick={() => this.changeSpice("add")}>Add Some Heat</button>
        <button onClick={() => this.changeSpice()}>Cool It Off</button>
        <h2>Spice Level: {this.state.spiceLevel}</h2>
        <h2>Status: {this.state.spiceKeyword} </h2>
      </div>
    );
  }
}
export default App;
