import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => 
        <button
          key={option}
          onClick={() =>
          onLeaveFeedback(option)}
          >
          {option}
        </button>
      )}
    </>
  )
}

FeedbackOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    options: PropTypes.string,
    onLeaveFeedback: PropTypes.func
  }))
};