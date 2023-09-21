import React, { useState } from "react";

function Header(){

    setInterval(updateTime, 1000);

    const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        var newTime = new Date().toLocaleTimeString();

        setTime(newTime);
    }

    return(
        <header>
            <h1 style={{float : "left"}}>Keeper second II</h1>
            <h1 style={{float : "right"}}>{currentTime}</h1>
        </header>
    )
};

export default Header;
