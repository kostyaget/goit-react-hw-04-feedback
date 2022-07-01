import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import { AppContainer } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (evt) => {
    const key = evt.target.name;

    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;

      case 'bad':
        setBad(prevState => prevState + 1)
        break;
    
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (good
              ? Math.round((good / total) * 100)
              : 0);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          : <Notification message="There is no feedback" />}
      </Section>
    </AppContainer>
  ); 
};
