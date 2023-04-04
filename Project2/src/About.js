import React from "react"
import ImageSlider from "./ImageSlider"

export default function About(){
  const slides = [
    { url: "../g1.jpg", title: "beach" },
    { url: "../g2.jpg", title: "boat" },
    { url: "../g3.jpg", title: "forest" },
    { url: "../g4.jpg", title: "city" },
  ];

  const containerStyles = {
    width: "400px",
    height: "300px",
    margin: "0 auto",
  };
    return(
        <div id="about">
            <p className="about-head" id="underline"><strong>About Us</strong></p>
            <div className="about-left">
                <div className="para">
                    <strong>Who are we?</strong>
                    <div className="sub-para">
                        Project MANAS is the official AI and Robotics team of MAHE, Manipal established in 2014. We are the Grand Prize winners and won the Lescoe Cup at the Intelligent Ground Vehicle Competition which is held at Michigan. Our aim is to build Indias first driverless car and are among the top 13 participants in the Mahindras Rise Prize challenge.
                    </div>
                </div>
                <div className="para">
                    <strong>Vision</strong>
                    <div className="sub-para">
                        Project MANAS aims to inspire advanced research in Artificial Intelligence and oversee its implementation enabling automated systems to be made available to general populous.
                    </div>
                </div>
                <div className="para">
                    <strong>Mission</strong>
                    <div className="sub-para">
                        Our mission is to uphold the tradition of pushing the limits of Artificial Intelligence and Bringing Bits to Life.
                    </div>
                </div>
            </div>
            <div className="slider">
              <div style={containerStyles}>
                <ImageSlider slides={slides} />
              </div>
            </div>
        </div>
    )
}