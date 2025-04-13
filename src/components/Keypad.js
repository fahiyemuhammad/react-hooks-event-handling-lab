// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <input onChange={event => console.log("Entering password...")}type="password"></input>
        </div>
    )
}

export default Keypad;