import React from 'react';
import docData from '../../../../docs/headers';
import "./docs.css";
import Parser from './Parser';


function Docs() {
    return (
        <div className="docs">
            <Parser data={docData}/>
        </div>
    )
}

export default Docs;
