import React from "react"
import MenuCard from "./MenuCard";

function Menu({foods, onClickDeleteFood}){

    return (
        <div className="fb-collection">
            {foods.map((food) => (
            <MenuCard key={food.id} food={food} onClickDeleteFood={onClickDeleteFood}/>
        ))}
        </div>
    )
}

export default Menu;