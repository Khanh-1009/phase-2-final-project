import React from "react"
import MenuCard from "./MenuCard";

function Menu({foods, onClickDeleteFood}){
    const foodList = foods.map((food) => {
        return (
            <MenuCard key={food.id} food={food} onClickDeleteFood={onClickDeleteFood}/>
        )
    })

    return (
<div className="fb-collection">{foodList}</div>
    )
}

export default Menu;