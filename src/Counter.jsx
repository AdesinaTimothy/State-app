import { useState } from "react"

function Counter () {
const [countvar, setCountVar] = useState(0)


const countManager = () => {
    setCountVar(countvar+1)
}

const resetManager = () => {
    setCountVar(countvar*0)
}

 return (
    <div>
        <h1> Count Value : {countvar}</h1>
        <button onClick = {countManager}>Count</button>
        <button onClick = {resetManager}>Reset</button>
    </div>
 )
}

export default Counter