import React from 'react'


function MenuCard({food, onClickDeleteFood}) {
    const {name, image} = food

    function handleClick(){
        alert("Thanks for your order")
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
        <button className="order" onClick={handleClick}>Place Order</button>
        <button onClick={handleDeleteItem}>Not My Favorite</button>
        </div>
  );
}

export default MenuCard;