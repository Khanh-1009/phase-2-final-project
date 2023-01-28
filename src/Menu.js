import React from "react"
import MenuCard from "./MenuCard";

function Menu({foods}){
    const foodList = foods.map((food) => {
        return (
            <MenuCard key={food.id} name={food.name} image={food.image}/>
        )
    })

    return (
<div className="fb-collection">{foodList}</div>
    )
}

export default Menu;