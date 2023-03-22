import React, { Component } from "react";

// export class App extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   static propTypes = {};

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   handleIncrement = evt => {
//     console.log("Increment button was clicked!", evt); // działa
//     console.log("this.props: ", this.props); // działa
//   };

//   handleDecrement = evt => {
//     console.log("Decrement button was clicked!", evt); // działa
//     console.log("this.props: ", this.props); // działa
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Metoda, którą będziemy przekazywać do przycisku
  updateMessage = evt => {
    console.log(evt); // Dostępny obiekt zdarzenia w odwołaniu onClick
    
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}