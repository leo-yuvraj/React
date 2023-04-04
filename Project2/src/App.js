import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Sponsers from "./Sponsers"
import TeamProp from "./TeamProp"
import TeamName from "./TeamName"
import Contact from "./Contact"
import End from "./End"
import Background from "./Background"
import Pic from "./Pic"
import Gallery from "./Gallery"


export default function App(){
  return(
    <div>   
      <BrowserRouter>
          <Pic/>
          <Navbar/>
          <Background/>
      </BrowserRouter>
      <About/>
      <Projects/>
      <Sponsers/>
      <TeamName/>
      <TeamProp/>
      <Gallery/>
      <Contact/>
      <End/>
    </div>
    )
}