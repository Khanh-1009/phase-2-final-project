import React from 'react'


function BeverageCard({name, image}) {
    
    return (
        <div className="card">
        <h2>{name}</h2>
        <img
            src={image}
            alt={name}
            className="fb-avatar"
        />
        <button className="drink-order">Place Order</button>
        </div>
  );
}

export default BeverageCard;
