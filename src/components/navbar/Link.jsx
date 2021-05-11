import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import pager from '../../redux/actions/pager';

function Link({name}) {
    const dispatch = useDispatch();
    const page = useSelector(state=>state.pager);

    const handlePage=()=>{
       dispatch(pager(name));
    };

    return (
        <div className={"link"+(page===name ? " selected": "")} onClick={handlePage}>
            {name}
        </div>
    )
}

export default Link;
