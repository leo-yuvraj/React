import React from "react"
import { Link } from "react-scroll"

export default function Arrivals(){
    return(
        <div id="product">
            <hr/>
            <h3 className="arrival">New Arrivals</h3>
            <hr/>
            <br/>
            <div className="main-div">
            <div class="container">
                <div>
                    <Link to="directmen" spy={true} smooth={true}>
                        <img src="../men.jpg" alt="Avatar" className="image"/>
                    </Link>
                    <div class="middle">
                        <div class="text">Men</div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div>
                    <Link to="directwomen" spy={true} smooth={true}>
                        <img src="../women.jpg" alt="Avatar" className="image"/>
                    </Link>
                    <div class="middle">
                        <div class="text">Women</div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div>
                    <Link to="directkids" spy={true} smooth={true}>
                        <img src="../child.jpg" alt="Avatar" className="image"/>
                    </Link>
                    <div class="middle">
                        <div class="text">Kids</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}