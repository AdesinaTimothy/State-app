import { useState } from "react"

function Button () {

const [buttonText, setButtonValue] = useState ("")

const manageButton = () => {
    setButtonValue("Create New Account")
}

return (
    <div>
        <button onClick = {manageButton}> Button Text is: {buttonText}</button>
    </div>
)

}


export default Button 