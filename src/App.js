import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

import NavBar from "./components/navbar";
import MainSlider from "./sections/mainslider";
import About from "./sections/about";
import WhatIDo from "./sections/whatido";
import Quote from "./sections/quote";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";
import Stats from "./sections/statscount";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSlider />
      <About />
      <WhatIDo />
      <Quote />
      <Portfolio />
      <Resume />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
