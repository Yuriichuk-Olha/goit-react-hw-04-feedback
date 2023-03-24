import PropTypes from 'prop-types'; 
import React from "react"
import css from 'components/Feedback/section.module.css'


const Section =({ title, children})=>{

    return (
        <>
            <div className={css.title}>{title}</div>
            {children}
        </>
    )        
}

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

export default Section