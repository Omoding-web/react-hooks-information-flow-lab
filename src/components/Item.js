import React, { useState } from "react";

function Item({ name, category }) {
  //State variable to track whether the item is in the cart or not
  const [updateCart, setUpdateCart] = useState (false)
  //Function for handling remove/add items from the cart
  const handleCart = () => {
    setUpdateCart(inCart => !inCart)
  }
 
  const cartClass = updateCart ? "in-cart" : ""
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={`Items ${updateCart ?"remove" : "add"}`} onClick={handleCart}>{updateCart ?"Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

