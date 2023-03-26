import React, { Component } from "react";

const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  )
};

const Buttons = ({ options, total, onLeaveFeedback }) => {
  return (
  <div>
    {options.map(option => <button key={option} onClick={() => { onLeaveFeedback }}>{options}</button>)}
  </div>
  )
}

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  updateGood = () => {    
    this.setState({
      good: this.state.good + 1,
    });
  };

  updateNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };


  updateBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = [ good, neutral, bad ];
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>

        <Section title="Please leave feedback">
          <Buttons options={options} total={total} onLeaveFeedback={this.countTotalFeedback}/>
        </Section>

        <h1>Statistics</h1>

        <section>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </section>
      </>
    );
  }
}