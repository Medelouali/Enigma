import React from 'react';
import { motion } from "framer-motion";

function Tools() {
    return (
        <motion.div className="tools"
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
        >
            Tools Page Is Not Built Yet
        </motion.div>
    )
}

export default Tools;
