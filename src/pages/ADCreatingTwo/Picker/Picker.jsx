import React, { memo } from 'react';
import cl from './Picker.module.css'
const Picker = ({className , whichOne , setWhichOne , setTaskInformation, taskInformation}) => {
    console.log(whichOne)
    return (
        <div className = {className ? [cl.Picker , className].join(' ') : cl.Picker}>
            <div className={  whichOne === 'startOnly' ? [cl.greyBlock , cl.leftBlock].join(' ') :  [cl.greyBlock , cl.rightBlock].join(' ') }>
                
            </div>
            <div onClick={() => {
                if (whichOne != 'startOnly'){
                    setWhichOne('startOnly')
                    setTaskInformation({ ...taskInformation , taskDate : {start : '' , end : ''}})
                }
            }} className={cl.left}>
                <p>Точная дата</p>
            </div>

            <div onClick={() => {
                if (whichOne != 'startAndEnd'){
                    setWhichOne('startAndEnd')
                    setTaskInformation({ ...taskInformation , taskDate : {start : '' , end : ''}})
                }
            }} className={cl.left}>
                <p>Период</p>
            </div>

        </div>
    );
};

export default memo(Picker);