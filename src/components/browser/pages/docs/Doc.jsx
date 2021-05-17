import React, { useState } from 'react'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';

function Doc({level, title, comp}) {
    const  [open, setOpen] = useState(false);
    const handleDoc=()=>{
        setOpen(!open);
    }
    return (
        <div className={`doc-${level}`}>
            <div className="empty"></div>
            <div className="doc">
                <div className="title" onClick={handleDoc} >
                    <div className="icon">{!open ? <ViewQuiltIcon/>: <ViewQuiltOutlinedIcon/>}</div>
                    <h5 className="title-p">{title}</h5>
                </div>
                {open && <div className="comp">{comp}</div>}
            </div>
        </div>
    )
}

export default Doc;
