import React, { useState, useEffect } from "react";
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";


const Restaurant = () => {                     
  const [menuData, setMenuData] = useState([]);

  

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);

  };

  useEffect(() => {
    if (!!Menu.length) setMenuData(Menu);
  }, []);

  

  return (
    
    <>
     
      <div className="btn-group"> 
        
          <button className="btn-group__item" onClick={() => filterItem("breakfast")}> Breakfast </button>
          <button className="btn-group__item" onClick={() => filterItem("lunch")} > Lunch  </button>
          <button className="btn-group__item" onClick={() => filterItem("evening")} > Evening </button>
          <button className="btn-group__item" onClick={() => filterItem("dinner")} > Dinner </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>  All </button>
        
     </div>
     

     <MenuCard menuData={menuData} />
     </>
     );
   }

export default Restaurant;
