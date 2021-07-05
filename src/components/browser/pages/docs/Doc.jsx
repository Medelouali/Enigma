import React, { useState, useRef } from 'react'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import { motion } from "framer-motion";

function Doc({title, comp}) {
    const  [open, setOpen] = useState(false);
    const divRef=useRef(null);
    const handleDoc=()=>{
        setOpen(!open);
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth" , block: "center" });
    }
    return (
        <div ref={divRef} className="doc-1">
            <div className="empty"></div>
            <div className="doc">
                <motion.div className="title" onClick={handleDoc} 
                    whileHover={{scale: 1.1, originX: 0}}
                >
                    <div className="icon">{comp!==<></> &&
                        (!open ? <ViewQuiltIcon/>: <ViewQuiltOutlinedIcon/>)}</div>
                    <h5 className="title-p">{title}</h5>
                </motion.div>
                {open && <div className="comp">{comp}</div>}
            </div>
        </div>
    )
}

export default Doc;
