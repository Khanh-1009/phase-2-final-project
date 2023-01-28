import React from 'react'


function MenuCard({name, image}) {

    function handleClick(){
        alert("Thanks for your order")
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
        </div>
  );
}

export default MenuCard;