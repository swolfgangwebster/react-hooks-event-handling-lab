// Code Keypad Component Here
import React, { useState} from 'react';


function Keypad (){
    const [ps, setPs] = useState("")

    function handle(e) {
        console.log("Entering password...")
        setPs(e.target.value)
    }
    
    return (
        <div>
            <input onChange={handle} type="password" />
        </div>
    )
}

export default Keypad;