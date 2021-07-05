import React, { useState } from 'react';
import docData from '../../../../docs/headers';
import "./docs.css";
import Parser from './Parser';
import { motion } from "framer-motion";


function Docs() {
    const [start, setStart] = useState(true);

    return (
        <motion.div className={"docs" + (start? " center-docs": "")} onClick={()=>setStart(false)}
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
        >
            <Parser data={docData}/>
        </motion.div>
    )
}

export default Docs;
