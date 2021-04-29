import React from 'react';
import "../snippet.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Command({command}) {
    return (
        <div className="command toRight">
            <div className="arrows">
                    <div className="left-arrow"><ArrowForwardIosIcon/></div>
                    <div className="right-arrow"><ArrowForwardIosIcon/></div>
            </div>
            <div className="input">
                {command}
            </div>
            <div className=""></div>
        </div>
    )
}

export default Command;