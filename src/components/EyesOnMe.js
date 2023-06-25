// Code EyesOnMe Component Here
import React, { useState} from 'react';

function EyesOnMe() {

    function foc() {
        console.log("Good!")
    }

    function blu() {
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={foc} onBlur={blu} >Eyes on me</button>
        </div>

    )
}

export default EyesOnMe;
