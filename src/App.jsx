import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import users from "./users.json";

function App() {

  let increment = Math.floor(Math.random()*users.length)
  const [index, setindex] = useState(increment);

  const changeUser =()=> {
    let increment2 = Math.floor(Math.random()*users.length)

    setindex(increment2)
  }

  let red =Math.floor(Math.random()*255)
  let blue =Math.floor(Math.random()*255)
  let green =Math.floor(Math.random()*255)

  document.body.style = `background: rgb(${red},${blue},${green})`

  // let rand = Math.floor(Math.random()*users.length);
  // let rValue = users[rand];

  return (
    <div className="App">

      <h1 style={{color:`rgb(${red},${blue},${green})`}}> <i class="fa-solid fa-user-astronaut" ></i> {users[index].name.first + ' ' + users[index].name.last}</h1>
      <div>
        <img src={users[index].picture.large}></img>
      </div>
      <h2 style={{color:`rgb(${red},${blue},${green})`}}> <i class="fa-solid fa-square-envelope"></i> {users[index].email}</h2>
      <h2 style={{color:`rgb(${red},${blue},${green})`}}> <i class="fa-solid fa-mobile-screen"></i> {users[index].phone}</h2>
      <h2 style={{color:`rgb(${red},${blue},${green})`}}> <i class="fa-solid fa-map-location"></i> {users[index].location.city}, {users[index].location.state}, {users[index].location.country}</h2>
 
      <button onClick={ changeUser }>Siguiente</button>
    </div>
  );
}

export default App;
