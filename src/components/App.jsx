import React, { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => (
      {
        [option]: prevState[option] + 1,
      }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = (this.countTotalFeedback());
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            /> )
            : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
      </>
    );
  }
}