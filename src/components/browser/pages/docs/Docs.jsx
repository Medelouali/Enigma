import React, { useState } from 'react';
import docData from '../../../../docs/headers';
import "./docs.css";
import Parser from './Parser';


function Docs() {
    const [start, setStart] = useState(true);

    return (
        <div className={"docs" + (start? " center-docs": "")} onClick={()=>setStart(false)}>
            <Parser data={docData}/>
        </div>
    )
}

export default Docs;
