import React from 'react';
import { motion } from "framer-motion";

function Graphs() {
    return (
        <motion.div className="graphs"
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
        >
            Graphs Page Is Not Built Yet
        </motion.div>
    )
}

export default Graphs;
