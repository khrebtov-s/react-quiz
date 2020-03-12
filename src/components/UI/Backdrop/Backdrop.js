import React from 'react'
import classes from './Backdrop.css'

const Backdrop = (props) => (
    <div
        className={classes.backdrop}
        onClick={props.onClick}
    >
    </div>
)

export default Backdrop