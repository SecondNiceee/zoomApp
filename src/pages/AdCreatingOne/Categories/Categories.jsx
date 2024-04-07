import React from 'react';
import cl from './Categories.module.css'
const Categories = ({className , taskInformation, setCatagoryChoiceOpen , setSubcategoryChoiceOpen }) => {
    return (
        <div className = { className ? [cl.Categories , className].join(' ') : cl.Categories   }>
            <div className={cl.Categories__block}>
                <p>Категория</p>
                <p c onClick={(e) => {setCatagoryChoiceOpen(true)}} className = {cl.Category__link} href="">{taskInformation.category['name']}</p>
            </div>
            <hr className={cl.line} />
            <div className={cl.Categories__block}>
                <p>Подкатегория</p>
                <p  onClick={() => {setSubcategoryChoiceOpen(true)}} className={cl.Category__link} href="">{taskInformation.subCategory.slice(0,18)}
                {taskInformation.subCategory=== '-' ? '' : '.'}
                </p>
            </div>
        </div>
    );
};

export default Categories;