import React from "react"



export default function Form(){
        const [formData, setFormData] = React.useState(
            {
                firstName: "", 
                lastName: "", 
                isFriendly: true,
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
        return (
            <div id="forms">
            <div className="form-main">
                <div className="form-top">
                    <h3 className="main-under">Become a subscriber to avail exciting offers.</h3>
                    <h5 className="some">*Terms & Conditions apply.</h5>
                </div>
            
            <div className="form">
                <div className="form-div">          
                <h3 className="form-text">Sign Up!</h3>
                <form onSubmit={handleSubmit} className="form1">
                <input
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="form-input"
                    id="form-inp"
                />
                <br/>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    className="form-input"
                />
                <br/>
                <br/>                
                <button><strong>Sign Up / Login In</strong></button>
                <br />
                <br />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                    className="form-check"
                />
                <label htmlFor="isFriendly">Keep getting updates on email.</label>
            </form>
            </div>
            {/* <hr/> */}
            </div>
            </div>

            </div>
    )
}