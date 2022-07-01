import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackBtn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <FeedbackContainer>
            {options.map(option => (
                <FeedbackBtn key={option} name={option} onClick={onLeaveFeedback}>{option}</FeedbackBtn>
            ))}
        </FeedbackContainer>   
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};