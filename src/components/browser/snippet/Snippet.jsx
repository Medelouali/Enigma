import React, { useState } from 'react';
import "./snippet.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import enigma from "../../../logic/enigma";
import { useDispatch } from "react-redux";

import history from "../../../redux/actions/history";
import { special } from '../../../logic/helpers/special';
import cleanHistory from '../../../redux/actions/cleanHistory';

function Snippet() {
    const [command, setCommand]=useState("");
    const dispatch=useDispatch();


    const sendCommand=(e)=>{
        e.preventDefault();
        if(special(command)){
            dispatch(cleanHistory("browser"));
        }else{
            const response=enigma(command);
            dispatch(history({ command, response }));
        };
        setCommand("");
    };

    return (
        <div className="snippet">
            <form onSubmit={sendCommand} action="" className="command">
                <div className="arrows">
                    <div className="left-arrow"><ArrowForwardIosIcon/></div>
                    <div className="right-arrow"><ArrowForwardIosIcon/></div>
                </div>
                <input placeholder="Command goes here" value={command} type="text" 
                        onChange={(e)=>setCommand(e.target.value)}/>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default Snippet;
