
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
          <table>
              <tbody>
                <tr>
                  <td>Apple</td>
                  <td className={obj.apple>=budget?"green":"red"}>20</td>
                </tr>
                <tr>
                  <td>Banana</td>
                  <td className={obj.banana>=budget?"green":"red"}>10</td>
                </tr>
                <tr>
                  <td>Neutella</td>
                  <td className={obj.neutella>=budget?"green":"red"}>30</td>
                </tr>
                <tr>
                  <td>Razor</td>
                  <td className={obj.razor>=budget?"green":"red"}>5</td>
                </tr>
                <tr>
                  <td>CornFlakes</td>
                  <td className={obj.CornFlakes>=budget?"green":"red"}>15</td>
                </tr>
                <tr>
                  <td >Sound Bar</td>
                  <td  className={obj.SoundBar>=budget?"green":"red"}>50</td>
                </tr>
                <tr>
                  <td>Iphone</td>
                  <td className={obj.Iphone>=budget?"green":"red"}>80</td>
                </tr>
                
              </tbody>
          </table>
             
        </div>
    </div>
  )
}

export default App
