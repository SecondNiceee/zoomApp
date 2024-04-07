import React, { useState } from "react";
import cl from "./ChoiceCategory.module.css";
import OneInput from "../../../components/UI/OneInput/OneInput";
import CategoryItem from "../CategoryItem/CategoryItem";
import Palitra from "../../../images/icons/Palitra.png";
const ChoiceCategory = ({
  setTaskInformation,
  taskInformation,
  setCatagoryChoiceOpen,

}) => {
  const [inputValue, setInputValue] = useState("");
  const [categoriesArr, setCategoriesArr] = useState([
    { name: "Дизайн 1", icon: "Palitra.png", value: "design1", key: 1 },
    { name: "Дизайн 2", icon: "Palitra.png", value: "design2", key: 2 },
    { name: "Дизайн 3", icon: "Palitra.png", value: "design3", key: 3 },
    { name: "Дизайн 4", icon: "Palitra.png", value: "design4", key: 4 },
    { name: "Дизайн 5", icon: "Palitra.png", value: "design5", key: 5 },
    { name: "Дизайн 6", icon: "Palitra.png", value: "design6", key: 6 },
  ]);
  return (
    <div className={cl.ChoiceCategory}>
      <OneInput
        placeholder="Поиск по заданиям"
        value={inputValue}
        setInputValue={setInputValue}
        className={cl.OneInput}
      />
      <div className={cl.categoryContainer}>
        {categoriesArr.map((e) => {
          return (
            <div
              onClick={() => {
                setTaskInformation({ ...taskInformation, category: {name : e.name , value : e.value} , subCategory : '-'});
                setCatagoryChoiceOpen(false);
              }}
              className={cl.wrap}
            >
              <CategoryItem {...e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChoiceCategory;
