import React from "react"
import insta from "./images/insta.png"
import twitter from "./images/twitter.png"

export default function Team(props){
    return(
        <div className="card">
            <div className="card2">
            <img src={props.img}className="card--image" />
            <p className="card--title"><strong>{props.name}</strong></p>
            <p className="card--price"><span className="bold"><strong>{props.position}</strong></span> </p>
            <div className="card--stats">
                <img src={insta} className="card--star" />
                <img src={twitter} className="card--star" />
                
            </div>
            </div>
        </div>
        
    )
}