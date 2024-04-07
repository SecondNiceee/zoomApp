import React from 'react';
import cl from './Cap.module.css';
const Cap = ({className , step , ...props}) => {
    return (
        <div className = {className ? [className , cl.Cap].join(' ') : cl.Cap}>
            {props.children}
            <p className = {cl.CapStepText}>{step.toString()}  &nbsp;  / <span> &nbsp; 3</span></p>
        </div>
    );
};

export default Cap;