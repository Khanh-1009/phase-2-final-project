import React, { useState } from 'react'


function MenuForm({onFoodFormSubmit}){
    const iconPhoto = "https://media.istockphoto.com/id/1334054372/vector/cute-sumo-eat-onigiri-cartoon-icon-illustration.jpg?s=612x612&w=0&k=20&c=tDrkNSzqhKBspw6226HToqwVCOl96CA8RNuQIEqbXqc="
    const [foodName, setFoodName] = useState("")
    const [foodImage, setFoodImage] = useState("")

    
    function handleFoodNameChange(e){
      setFoodName(e.target.value)
    }

    function handleFoodImageChange(e){
      setFoodImage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/food", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: foodName,
                image: foodImage === "" ? iconPhoto : foodImage,
            }),
        })
        .then(res => res.json())
        .then(newFood => {
          onFoodFormSubmit(newFood)
          setFoodName("")
          setFoodImage("")
        })
    }
    return (
        <div className="container">
          <form className="add-food-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Order"
              className="input-text"
              onChange={handleFoodNameChange}
              value={foodName}
            />
            <br />
            <input
              type="text"
              name="image"
              placeholder="Image"
              className="input-text"
              onChange={handleFoodImageChange}
              value={foodImage}
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create New Order"
              className="submit"
            />
          </form>
        </div>
      );
}

export default MenuForm;