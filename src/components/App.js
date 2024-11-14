import React from "react";
import { image } from "../data/data";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am passionate about creating web applications that solve real-world problems.</p>
      <img src={image} alt="I made this" />
      <NavBar />
      <Home />
      <About />



    </div>
  );
}

export default App;
