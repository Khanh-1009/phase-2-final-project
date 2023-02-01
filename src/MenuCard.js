import React, { useState } from 'react'


function MenuCard({food, onClickDeleteFood}) {
    const {name, image} = food
    const [placeOrder, setPlaceOrder] = useState(false)

    function handlePlaceOrderClick(){
        setPlaceOrder((placeOrder) => !placeOrder)
    }

    function handleDeleteItem(){
        fetch(`http://localhost:3000/food/${food.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => onClickDeleteFood(food))
    }
    
    return (
        <div className="menu-card">
        <h2>{name}</h2>
        <img
            src={image}
            alt={name}
            className="fb-avatar"
        />
        <button 
        className={placeOrder ? "order" : ""} 
        onClick={handlePlaceOrderClick}>
            {placeOrder ? "Cancel Order" : "Place Order"}
        </button>
        <button onClick={handleDeleteItem}>Not My Favorite</button>
        </div>
  );
}

export default MenuCard;