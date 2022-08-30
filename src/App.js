import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//import ImgO from './components/backg';

import NavBar from "./components/navbar";
import MainSlider from "./sections/mainslider";
import About from "./sections/about";
import WhatIDo from "./sections/whatido";
import Quote from "./sections/quote";
import Portfolio from "./sections/portfolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSlider />
      <About />
      <WhatIDo />
      <Quote />
      <Portfolio />
    </div>
  );
}

export default App;
