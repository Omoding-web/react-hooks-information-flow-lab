import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  //State variable to toggle between light and dark modes
  const [shade, setShade] = useState(false);
  const toggleMode = () => {
    setShade(shade => !shade);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = shade ? "App dark" : "App light"

  return (
    <div className={appClass}>
        
        <h2>Shopster</h2>
        {/*<button onClick={toggleMode}>{shade ? "Dark Mode": "Light Mode"}</button>*/}
       
      <Header onDarkModeClick={toggleMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
