import React from 'react'
import Vars from "./listing/Vars";
import Funcs from "./listing/Funcs";
import "./listing/list.css";

function List({command}) {
    switch (command) {
        case "$variables":
            return <Vars/>;
        case "$functions":
            return <Funcs/>
        default:
            <></>
    }
}

export default List
