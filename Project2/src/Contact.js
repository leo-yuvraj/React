import React from "react"
import map from "./images/map.png"

export default function Contact(){
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            email: "",
            message:""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    return(
        <div className="contact">
            <img src={map}/>
            <div className="contact-text">
                <p className="para-c"><strong>Contact Us</strong></p>
                <form onSubmit={handleSubmit} className="form1">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.firstName}
                    className="form-input"
                    id="form-inp"
                />
                <br/>
                <br/>
                <input
                    type="text"
                    placeholder="Email Id"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="form-input"
                    id="form-inp"
                />
                <br/>
                <br/>
                <textarea
                    placeholder="Message"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                    className="form-input"
                />
                <br/>
                <br/>
                <button type="clear"><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    )
}