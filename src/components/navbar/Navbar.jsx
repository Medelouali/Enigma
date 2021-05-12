import React from 'react';
import Link from './Link';
import "./navbar.css";

function Navbar() {
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
