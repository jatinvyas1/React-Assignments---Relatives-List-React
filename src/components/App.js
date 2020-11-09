import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.relativesList = ["Lal", "Bal", "Pal"];
  }
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.relativesList.map((element, index) => {
            return <li key={"relativeListItem" + (index + 1)}>{element}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
