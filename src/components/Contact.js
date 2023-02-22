import React, { useState } from "react";

export const Contact = () => {
    const [contact, setContact] = useState();

    const handleContactClick = () => {
        setContact(alert('contact clicked'))
    }
    return (
        <div>
            <button style={{ fontSize: 28 }} onClick={() => handleContactClick()}>Contact</button>
        </div>
    )
}