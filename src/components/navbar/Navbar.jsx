import React from 'react';
import Link from './Link';
import "./navbar.css";
import { useMedia } from "use-media";
import Logo from './Logo';
import Burger from './burger/Burger';

function Navbar() {
    const isMobile=useMedia({ maxWidth: "500px"});
    if(isMobile)return(
        <div className="out-burger">
            <Logo/>
            <Burger/>
        </div>
    );
    return (
        <div className="navbar">
            <Link name="Matrix Mode"/>
            <Link name="Scalar Mode"/>
            <Link name="Enigma Interpreter"/>
            <Link name="Graphs"/>
            <Link name="Docs"/>
            <Link name="Tools"/>
        </div>
    );
}

export default Navbar;
