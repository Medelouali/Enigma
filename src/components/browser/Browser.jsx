import React from 'react';
import "./browser.css";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import Manager from './Manager';

function Browser() {
    const pager = useSelector(state => state.pager);
    if(pager!=="Enigma Interpreter") return (<div className="browser"><Manager page={pager}/></div>);
    return (
        <ScrollToBottom className={"browser"}>
            <Manager page={pager} />
        </ScrollToBottom>
    )
}

export default Browser;
