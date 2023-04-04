import React from "react"

export default function Projects(props){
    return(
        <div id="projects">
            <p className="project-head" id="underline2"><strong>Projects</strong></p>
            <ul className="image-gallery">
                <li>
                    <img src="../seraphim.jpg" alt="" />
                    <div class="overlay1"><span>SERAPHIM</span></div>
                </li>
                <li>
                    <img src="../cleo.jpg" alt="" />
                    <div class="overlay1"><span>CLEO</span></div>
                </li>
                <li>
                    <img src="../ev.jpg" alt="" />
                    <div class="overlay1"><span>EVE</span></div>
                </li>
                <li>
                    <img src="../solo.jpg" alt="" />
                    <div class="overlay1"><span>SOLO</span></div>
                </li>
                <li>
                    <img src="../adam.avif" alt="" />
                    <div class="overlay1"><span>ADAM</span></div>
                </li>
                <li>
                    <img src="walle.jpg" alt="" />
                    <div class="overlay1"><span>WALL-E</span></div>
                </li>
            </ul>
        </div>
    )
}