import React from 'react';
import "../snippet.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Response({response}) {
    return (
        <div className="command toRight">
            <div className="arrows">
                    <div className="left-arrow"><ArrowRightAltIcon/></div>
                    <div className="right-arrow"><ArrowForwardIosIcon/></div>
            </div>
            <div className="input">
                {response}
            </div>
            <div className=""></div>
        </div>
    )
}

export default Response;
