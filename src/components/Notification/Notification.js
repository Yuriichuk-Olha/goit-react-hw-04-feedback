import PropTypes from 'prop-types';
import css from 'components/Section/section.module.css'

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