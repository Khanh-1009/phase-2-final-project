import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#b30000",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  // return <div>{/*{code here}*/}</div>;
  return (
    <div>
      <NavLink 
      to="/" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "red",
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to="/menu" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "red",
      }}
      >
        Menu
      </NavLink>
      <NavLink 
      to="/beverages" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "red",
      }}
      >
        Beverages
      </NavLink>
      <NavLink 
      to="/contact" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "red",
      }}
      >
        Contact
      </NavLink>
    </div>
  )
}

export default NavBar;