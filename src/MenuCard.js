import React from 'react'


function MenuCard({name, image}) {
    
    return (
        <div className="menu-card">
        <h2>{name}</h2>
        <img
            src={image}
            alt={name}
            className="fb-avatar"
        />
        <button className="order">Place Order</button>
        </div>
  );
}

export default MenuCard;