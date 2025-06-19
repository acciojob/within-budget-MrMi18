
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [budget,setBudget] = useState(0);
const obj = {apple:20,banana:10,neutella:30,razor:5,CornFlakes:15 ,SoundBar:50,Iphone:80}
  return (
    <div>
        <h2>Enter your budget to check available item</h2>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
        <div>
          <h3>item you can buy are in green color </h3>
          <ul>
             <li> <span>Apple</span> <span className={obj.apple>=budget?"green":"red"}>20</span></li>
             <li> <span>Banana</span> <span className={obj.banana>=budget?"green":"red"}>10</span></li>
             <li> <span>Neutella</span> <span className={obj.neutella>=budget?"green":"red"}>30</span></li>
             <li> <span>Razor</span> <span className={obj.razor>=budget?"green":"red"}>5</span></li>
             <li> <span>CornFlakes</span> <span className={obj.CornFlakes>=budget?"green":"red"}>15</span></li>
             <li> <span>Sound Bar</span> <span className={obj.SoundBar>=budget?"green":"red"}>50</span></li>
             <li> <span>Iphone</span> <span className={obj.Iphone>=budget?"green":"red"}>80</span></li>
          </ul> 
        </div>
    </div>
  )
}

export default App
