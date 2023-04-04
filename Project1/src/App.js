import React from "react"
import Heading from "./components/Heading"
import Body from "./components/Body"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Arrivals from "./components/Arrivals"
import MenCall from "./components/MenCall"
import WomenCall from "./components/WomenCall"
import KidsCall from "./components/KidsCall"
import ProductProp from "./components/ProductProp1"
import ProductProp1 from "./components/ProductProp"
import ProductProp2 from "./components/ProductProp2"
import Form from "./components/Form"
import Contact from "./components/Contact"



export default function App(){
  return(
    <div>
        <BrowserRouter>
            <div id="about">
                <Heading/>
                <Body/>
            </div>
        </BrowserRouter>
            <Arrivals/>
            <WomenCall/>
            <ProductProp1/>
            <MenCall/>
            <ProductProp/>
            <KidsCall/>
            <ProductProp2/>
            <Form/>
            <Contact/>    
    </div>
)

}