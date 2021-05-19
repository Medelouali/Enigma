import React from 'react';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import "./navbar.css";

function Logo() {
    return (
        <div className="website-logo">
            <div className="enigma"><ViewQuiltOutlinedIcon/></div>
            <div className="enigma-name">Enigma</div>
        </div>
    )
}

export default Logo;
