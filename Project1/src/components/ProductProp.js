import React from "react"
import pic1 from "../images/prop1.jpeg"
import pic2 from "../images/prop2.jpeg"
import pic7 from "../images/prop7.jpeg"
import pic8 from "../images/prop8.jpg"
import pic9 from "../images/prop9.jpeg"
import pic10 from "../images/prop10.jpeg"
import pic11 from "../images/prop11.jpeg"
import Product from "./Product"

export default function ProductProp(){
    return(
        <section className="cards-list">
        <Product
            id= {1}
            title= "Life Lessons with Katie Zaferes"
            price= {136}
            coverImg= {pic1}
            rating= {5.0}
            reviewCount= {6}
            location= "Online"
            openSpots= {0}
        />
        <Product
            id= {1}
            title= "Life Lessons with Katie Zaferes"
            price= {136}
            coverImg= {pic2}
            rating= {5.0}
            reviewCount= {6}
            location= "Online"
            openSpots= {0}
        />
        <Product
        id= {1}
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        coverImg= {pic7}
        rating= {5.0}
        reviewCount= {6}
        location= "Online"
        openSpots= {0}
        />
        <Product
        id= {1}
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        coverImg= {pic8}
        rating= {5.0}
        reviewCount= {6}
        location= "Online"
        openSpots= {0}
        />
        <Product
        id= {1}
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        coverImg= {pic9}
        rating= {5.0}
        reviewCount= {6}
        location= "Online"
        openSpots= {0}
        />
        <Product
        id= {1}
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        coverImg= {pic10}
        rating= {5.0}
        reviewCount= {6}
        location= "Online"
        openSpots= {0}
        />
        <Product
        id= {1}
        title= "Life Lessons with Katie Zaferes"
        price= {136}
        coverImg= {pic11}
        rating= {5.0}
        reviewCount= {6}
        location= "Online"
        openSpots= {0}
        />  
        </section>
    )
}