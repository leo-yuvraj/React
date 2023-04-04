import React from "react"
import star from "../images/star.png" 

export default function Product1(props) {
    // let badgeText
    // if (props.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.location === "Online") {
    //     badgeText = "ONLINE"
    // }
    return (
        <div className="card1">
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <img src={props.coverImg}className="card--image1" />
            <div className="card--stats1">
                <img src={star} className="card--star1" />
                <span>{props.rating}</span>
                <span className="gray1">({props.reviewCount}) • </span>
                <span className="gray1">{props.location}</span>
            </div>
            <p className="card--title1">{props.title}</p>
            <p className="card--price1"><span className="bold1">From ${props.price}</span> / person</p>
        </div>
    )
}