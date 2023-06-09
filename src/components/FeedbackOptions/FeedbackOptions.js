import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={css.conteinerBtn}>

         {options.map((option) => (
            <button className={css.btn} type="button" onClick={()=>onLeaveFeedback(option)} key={option} >
              {option}
            </button>
           ))}

        </div>
  );
};

FeedbackOptions.propTypes= {
    options:PropTypes.array.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}

export default FeedbackOptions;