import React from "react"
import fb from "../images/fb.png"
import insta from "../images/insta.png"
import lin from "../images/lin.png"
import twitter from "../images/twitter.png"

export default function Contact(){
    return(
        <div className="foot-main">
        <h2 className="foot-head" id="contact">Contact Us</h2>
        <hr/>
        <footer className="footer">
            <p className="foot-left">Name is a brand which is made with compassion and spirit to carry the trend and make everyone fall in love with clothing everyday.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto deleniti consectetur in, rerum necessitatibus omnis, adipisci perferendis aperiam optio libero. Molestias, provident. A fuga nobis quia nam accusamus! Quidem aperiam itaque aspernatur voluptates!</p>
            <div className="foot-right">
                <p>Follow us for more updates!!</p>
                <a href="https://facebook.com"><img src={fb} className="foot-img"/></a>
                <a href="https://instagram.com"><img src={insta} className="foot-img"/></a>
                <a href="https://linkedin.com"><img src={lin} className="foot-img"/></a>
                <a href="https://twitter.com"><img src={twitter} className="foot-img"/></a>
                <p>For any queries contact us on : <br/> <strong>aquiliq@shop.com</strong></p>
                
            </div>
        </footer>
        </div>
    )
}