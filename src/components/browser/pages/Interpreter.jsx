import React from 'react';
import Snippet from '../snippet/Snippet';
import Command from '../snippet/commands/Command';
import Response from '../snippet/commands/Response';
import List from "../snippet/List";

import { useSelector } from "react-redux";
function Interpreter() {
    const hist=useSelector(state=>state.history);
    return (
        <div className="interpreter">
            {hist.map((item, index)=>{
                if(item.listing) return <List command={item.command}/>;
                return <div key={`c#${index}r`}><Command command={item.command}/>
                    {item.response!=="" && (<Response response={item.response}/>)}</div>})
            }
            <Snippet/>
        </div>
    );
}

export default Interpreter;
