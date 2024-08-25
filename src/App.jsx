import { useContext, useState } from "react";
import Home from "./Components/Home/Home"
import { StateContext } from "./Components/Home/Context";


function App() {
  const {darkMode} = useContext(StateContext)

  return (
    <div className={`${darkMode && "dark"} `}>
      <Home />
    </div>
  )
}

export default App
