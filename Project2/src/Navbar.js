import React from "react";
import { Link } from "react-scroll"

export default function Navbar()
{
    return(
        <div>
            <div className="navbar">  
                <nav className="heading">
                    <a><img src="../purelogo.png" className="head-img"/></a>
                     <ul className="head-list">
                        <li><Link to="about" activeClass="active" spy={true} smooth={true}>About</Link></li>
                        <li><Link to="team" activeClass="active" spy={true} smooth={true}>Team</Link></li>
                        <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="sponsers" spy={true} smooth={true}>Sponsers</Link></li>
                        <li><Link to="gallery" spy={true} smooth={true}>Gallery</Link></li>
                        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                     </ul>
                </nav>
             </div>
        </div>
    )
}