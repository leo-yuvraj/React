import React from "react"
import { Link } from "react-scroll"
// import { Link } from "react-router-dom"

export default function Heading(){
    return(
    <div>
        {/* <nav className="top-head">
            <h5>Get 10% off on using Axis Bank debit cards.</h5>
        </nav> */}
        <nav className="heading">
            <a><img src="../logodone.png" className="head-img"/></a>
            <li className="head-list">
                {/* <ul><Link to="/faq" >Sign Up</Link></ul> */}
                <ul><Link to="forms" spy={true} smooth={true}>Sign Up</Link></ul>
                <ul><Link to="contact" spy={true} smooth={true}>Contact Us</Link></ul>
                <ul><Link to="product" spy={true} smooth={true}>New Arrivals</Link></ul>
                <ul><Link to="about" activeClass="active" spy={true} smooth={true}>Home</Link></ul>
                <div>
                    <ul ><a><input type="text" id="search" placeholder="Search using clothes, bags etc."/></a></ul>
                </div>
            </li>
    
        </nav>
    </div>  

    // <div>
    //     <nav>
    //         <div className="top-head">
    //             <h5>Get 10% off on using Axis Bank debit cards.</h5>
    //         </div>
    //     </nav>
    // </div>
    )
}
