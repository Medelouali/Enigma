import React from 'react';
import Doc from './Doc';
import "./docs.css";

const lorem=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

function Docs() {
    const comp_1=<Doc level={0} title={"Enigma Interpreter"} comp={lorem}/>;
    const comp_2=<Doc level={0} title={"Enigma Interpreter"} comp={comp_1}/>;
    return (
        <div className="docs">
            <Doc level={0} title={"Enigma Interpreter"} comp={lorem}/>
            <Doc level={0} title={"Enigma Interpreter"} comp={comp_2}/>
        </div>
    )
}

export default Docs;
