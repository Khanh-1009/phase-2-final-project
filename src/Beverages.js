import React from "react"
import BeverageCard from "./BeverageCard";

function Beverages({drinks}){ 
    
    return (
        <div className="fb-collection">
            {drinks.map((soda) => (
                <BeverageCard key={soda.name} name={soda.name} image={soda.image}/>
            ))}
        </div>
    )
}

export default Beverages;