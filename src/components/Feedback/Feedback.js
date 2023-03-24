import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

    onLeaveFeedback = (event)=> {
   
    this.setState(prevState => ({
      [event]: prevState[event] + 1,  
    }));
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good > 0) {
      const positive = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
      return positive;
    }
  };

  messageNoFeedback = () => {
    const message = 'There is no feedback';
    return message;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={ Object.keys(this.state)}

          onLeaveFeedback={this.onLeaveFeedback}
      
          />
        </Section>

        <Section title="Statistics">
          {this.countPositiveFeedbackPercentage() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              PositivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;