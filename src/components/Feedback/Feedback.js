import { useState } from 'react';

import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export default function Feedback(){
  
  const[feedback, setFeedback] = useState({good:0, neutral:0, bad:0})
  const{good,neutral,bad}=feedback;

  const onLeaveFeedback = (event)=> {   
        setFeedback(prevState => ({
          ...prevState,
          [event]: prevState[event] + 1,  
        }));
  }

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {        
        return Math.round((good / countTotalFeedback()) * 100);       
  };
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
            options={ Object.keys(feedback)}  
            onLeaveFeedback={onLeaveFeedback}        
            />
          </Section> 
          <Section title="Statistics">
            {countPositiveFeedbackPercentage() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                PositivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </div>
      );
}

