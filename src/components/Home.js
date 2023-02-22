import React, { useState } from "react";

export const Home = () => {

    const [home, setHome] = useState();
    const handleHomeClick = () => {
        setHome(alert('home clicked'))
    }
    return (
        <div >
            <button style={{ fontSize: 28 }} onClick={() => handleHomeClick()}> Home</button>
        </div>
    )
}