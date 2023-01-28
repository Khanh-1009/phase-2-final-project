import React from "react"
import BeverageCard from "./BeverageCard";

function Beverages({drink}){
    const drinkList = drink.map((soda) => {
        return (
            <BeverageCard key={soda.name} name={soda.name} image={soda.image}/>
        )
    })

    return (
<div className="fb-collection">{drinkList}</div>
    )
}

export default Beverages;