import React, { useState } from 'react';
import "./snippet.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import enigma from "../../../logic/enigma";
import { useDispatch, useSelector } from "react-redux";

import history from "../../../redux/actions/history";
import variable from "../../../redux/actions/data/variable";
import { special } from '../../../logic/helpers/special';
import cleanHistory from '../../../redux/actions/cleanHistory';

function Snippet() {
    const dispatch=useDispatch();
    const commands = useSelector(state => state.history);
    const variables = useSelector(state => state.variables);
    const functions = useSelector(state => state.functions);

    const [command, setCommand]=useState("");
    const [currentLine, setCurrentLine]=useState(commands.length);
    
    const sendCommand=(e)=>{
        e.preventDefault();
        if(special(command)){
            dispatch(cleanHistory());
        }else{
            const response=enigma(command, { functions, variables });
            if(response.operation==="storeVar"){
                dispatch(history({ command, response: "" }));
                //Do some dispatching...
                dispatch(variable(response.variable));
            }else if(response.operation==="storeFunc"){
                dispatch(history({ command, response: "" }));
                //Do some dispatching...
            }else 
                dispatch(history({ command, response: response.result.text }));    
        };
        setCommand("");
        setCurrentLine(commands.length);
    };
    const handleUpDown=(e)=>{
        const maxLine=commands.length;
        if(maxLine>0){
            if(e.keyCode===38 || e.key==="ArrowUp"){
                if(currentLine===maxLine || currentLine===maxLine-1) setCommand("");
                if(currentLine<maxLine-1){
                    setCommand(commands[currentLine+1].command);
                    setCurrentLine(currentLine+1);
                };
            };
            if(e.keyCode===40 || e.key==="ArrowDown"){
                if(currentLine===0)setCommand(commands[0].command);
                if(currentLine>=1){
                    setCurrentLine(currentLine-1);
                    setCommand(commands[currentLine].command);
                };
            };
        }
    };

    const handleCommand=(e)=>{
        setCommand(e.target.value);
    };

    return (
        <div className="snippet">
            <form onSubmit={sendCommand} action="" className="command">
                <div className="arrows">
                    <div className="left-arrow"><ArrowForwardIosIcon/></div>
                    <div className="right-arrow"><ArrowForwardIosIcon/></div>
                </div>
                <input placeholder="Enigma's commands" value={command} type="text"
                        onKeyDown={handleUpDown} 
                        onChange={handleCommand}/>
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default Snippet;
