import React from 'react';
import "./browser.css";
import Snippet from './snippet/Snippet';
import ScrollToBottom from "react-scroll-to-bottom";
import Command from './snippet/commands/Command';
import Response from './snippet/commands/Response';
import { useSelector } from "react-redux";

function Browser() {
    const hist=useSelector(state=>state.history);
    return (
        <ScrollToBottom className={"browser"}>
            {hist.map((item, index)=>{
                return <div key={`c#${index}r`}><Command command={item.command}/>
                    <Response response={item.response}/></div>})
            }
            <Snippet/>
        </ScrollToBottom>
    )
}

export default Browser;
