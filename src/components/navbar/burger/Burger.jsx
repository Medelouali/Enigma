import React,{ useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./burger.css";

import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import pager from '../../../redux/actions/pager';

function Burger({items}) {
    const [closed, setClosed]=useState(true);
    const page = useSelector(state => state.pager);

    const dispatch = useDispatch();

    const handleBurger=()=>{
        setClosed(!closed);
    };

    const handleList=(item)=>{
        return ()=>{
            dispatch(pager(item));
        }
    }
    return (
        <div className="burger">
            <div className="navBar">
                <div className="icon-enigma">
                    <div className="enigma"><ViewQuiltOutlinedIcon/></div>
                    <div className="enigma-name">Enigma</div>
                </div>
                <div onClick={handleBurger} className="menu">{closed && <MenuRoundedIcon/>}</div>
            </div>
            <div className={"list" + (closed ? "": " move-left")}>
                <div onClick={handleBurger} className={"close-burger"+ (!closed? " turn-it": "")}><HighlightOffRoundedIcon/></div>
                {items.map((item, i)=>
                    <div onClick={handleList(item)} key={i} 
                        className={"list-item" + (page===item ? " on-page": "") }>{item}</div>)
                }
            </div>
        </div>
    )
}

export default Burger;
