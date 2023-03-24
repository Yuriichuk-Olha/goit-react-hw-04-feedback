import PropTypes from 'prop-types';
import React from "react";
import css from 'components/Feedback/section.module.css'

const Notification = ({message}) => {
    return(
        <div className={css.title}>
            <p>{message}</p>
        </div>
    )
}


Notification.propTypes = {
    message:PropTypes.string.isRequired,
}

export default Notification 