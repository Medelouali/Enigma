import React from 'react';
import Burger from './burger/Burger';
import { useMedia } from "use-media";
import Link from './Link';
import Logo from './Logo';

import "./navbar.css";

function Navbar() {
    const isMini=useMedia({ maxWidth: "500px" });
    const pages=["Enigma Interpreter", "Graphs", "Docs", "Tools"];
    if(isMini) return <Burger items={pages}/>;
    return (
        <div className="navbar"> 
            <div className="inner-navbar">
                <Logo/>
                <div className="links">
                    {pages.map((item, i)=><Link name={item} key={`${item}#${i}${item}`}/>)}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
