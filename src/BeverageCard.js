import React from 'react'


function BeverageCard({name, image}) {
    
    function handleClick(){
        alert("Thanks for your order! It will be delivered to your table shortly!")
    }

    return (
        <div className="card">
        <h2>{name}</h2>
        <img
            src={image}
            alt={name}
            className="fb-avatar"
        />
        <button className="drink-order" onClick={handleClick}>Place Order</button>
        </div>
  );
}

export default BeverageCard;


