import React from 'react';
import "./browser.css";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import Manager from './Manager';

function Browser() {
    const pager = useSelector(state => state.pager);
    return (
        <ScrollToBottom className={"browser"}>
            <Manager page={pager} />
        </ScrollToBottom>
    )
}

export default Browser;
