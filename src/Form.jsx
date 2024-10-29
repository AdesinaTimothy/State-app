import { useState } from "react"

export default function Form () {

    const [formDetails, setFormDetails] = useState({fullname: "", email: ""}) 

    return (
        <div>
            <form>
                <div className="input-group">
                    <label htmlFor="fullname">Enter Full Name</label>
                    <input 
                    type="text" 
                    name= "fullname"
                    id="fullname"
                    value= {formDetails.fullname || ""}
                    onChange= {(e) => setFormDetails({...formDetails,fullname: e.target.value})}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Enter Your Email</label>
                    <input 
                    type="text"
                    name = "email" 
                    id = "email"
                    value = {formDetails.email || ""}
                    onChange={(e) => setFormDetails({...formDetails, email: e.target.value})}
                    />
                </div>
                
            </form>
        </div>
    )
}