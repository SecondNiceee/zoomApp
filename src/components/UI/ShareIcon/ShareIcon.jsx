import React from 'react';
import Share from '../../../images/icons/Share.svg'
import cl from './ShareIcon.module.css'
const ShareIcon = ({className}) => {
    return (
        <div className = {className ? [cl.ShareIcon , className].join(' ') : cl.ShareIcon}>
            <img src={Share} alt="" />
        </div>
    );
};

export default ShareIcon;