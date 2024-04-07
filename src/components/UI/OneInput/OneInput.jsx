import React from 'react';
import classes from './OneInput.module.css'
const OneInput = ( {  setInputValue , inputValue , ...props}) => {
    return (
        <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} style={props.style} {...props} type="text" className = {classes.OneInput}  />
    );
};

export default OneInput;