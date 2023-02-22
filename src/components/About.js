import React, { useState } from "react";

export const About = () => {
    const [about, setAbout] = useState();

    const handleHAboutClick = () => {
        setAbout(alert('about clicked'))
    }
    return (
        <div>
            <button style={{ fontSize: 28 }} onClick={() => handleHAboutClick()}>About</button>
        </div>
    )
}