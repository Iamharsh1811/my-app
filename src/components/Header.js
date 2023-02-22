import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";

export const Header = () => {

    return (
        <div className="main-header"
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontFamily: 'sans-serif',
                marginRight: 10
            }}>
            <Home />
            <About />
            <Contact />
        </div>
    )
}