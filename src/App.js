import React, {useEffect, useState} from "react"
import { Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Menu from "./Menu"
import MenuForm from "./MenuForm"
import Beverages from "./Beverages"
import NavBar from "./NavBar"
import Contact from "./Contact"
import { drinks } from "./data"
import './App.css';

function App() {
  const [drink, setDrink] = useState(drinks)
  const [foods, setFoods] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/food")
    .then(res => res.json())
    .then(data => setFoods(data))
  }, [])  

  function handleFoodSubmit(newFood){
    setFoods([...foods, newFood])
  }

  function handleClickDeleteFood(deleteFood){
    const updatedFoodMenu = foods.filter((food) => food.id !== deleteFood.id)
    setFoods(updatedFoodMenu)
  }

  function handleClick(){
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Menu">
            <Menu foods={foods} onClickDeleteFood={handleClickDeleteFood}/>
            {showForm ? <MenuForm onFoodFormSubmit={handleFoodSubmit}/> : null}
            <div className="buttonContainer">
            <button onClick={handleClick}>{showForm ? "I have enough. Thanks!" : "Create Your Own Favorite Dishes"}</button>
            </div>
          </Route>
          <Route path="/Beverages">
            <Beverages drink={drink}/>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
