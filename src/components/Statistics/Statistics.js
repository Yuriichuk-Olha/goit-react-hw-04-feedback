import PropTypes from 'prop-types';
import React from "react";

export default function Statistics({ good, neutral, bad, total,PositivePercentage}){
    return ( 
    <div>
    <ul>        
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {PositivePercentage}%</li>
    </ul>
    </div>    
    )     
};

Statistics.propTypes = {
    
            good:PropTypes.number.isRequired,
            neutral:PropTypes.number.isRequired,
            bad:PropTypes.number.isRequired,
            total:PropTypes.number.isRequired,
            PositivePercentage:PropTypes.number.isRequired,
}