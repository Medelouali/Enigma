import React from 'react';
import Docs from './pages/docs/Docs';
import Graphs from './pages/graphs/Graphs';
import Interpreter from './pages/Interpreter';
import Tools from './pages/tools/Tools';

function Manager({page}) {
    switch (page) {
        case "Enigma Interpreter":
            return <Interpreter/>
        case "Docs":
            return <Docs/>
        case "Tools":
            return <Tools/>
        case "Graphs":
            return <Graphs/>
        default:
            <></>
    }
}

export default Manager;
