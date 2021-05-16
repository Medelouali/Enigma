import React from 'react';
import Doc from './Doc';
import "./docs.css";

function Docs() {
    const comp=<Doc level={0} title={"Enigma Interpreter"} comp={"Some text that does not matter heeere...."}/>;
    return (
        <div className="docs">
            <Doc level={0} title={"Enigma Interpreter"} comp={"Some text that does not matter heeere...."}/>
            <Doc level={0} title={"Enigma Interpreter"} comp={comp}/>
        </div>
    )
}

export default Docs;
