import React, { Component } from "react";

// const Statistics = () => {
//   return (

//   )
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // Metoda, którą będziemy przekazywać do przycisku
  updateStatisctics= evt => {
    console.log(evt); // Dostępny obiekt zdarzenia w odwołaniu onClick
    
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>

        <section>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </section>
        
        <h1>Statistics</h1>

        <section>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </section>
      </>
    );
  }
}