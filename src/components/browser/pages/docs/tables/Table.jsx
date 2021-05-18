import React, { useState } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

function Table({data, colums}) {
    const [lines, setLines]=useState(10);
    const handleMore=()=>{
        setLines(lines+15);
    };

    switch (colums) {
        case 1:
            return (
                <div className="table">
                    {data.slice(0, lines).map((item, i)=><Table1 data={item} key={`${item}#${i}`}/>)}
                    {lines<data.length && <button onClick={handleMore} className="more">View More</button>}
                </div>
            );
        case 2:
            return (
                <div className="table">
                    {data.slice(0, lines).map((item, i)=><Table2 data={item} key={`${item}#${i}`}/>)}
                    {lines<data.length && <button onClick={handleMore} className="more">View More</button>}
                </div>
            );
        case 3:
            return (
                <div className="table">
                    {data.slice(0, lines).map((item, i)=><Table3 data={item} key={`${item}#${i}`}/>)}
                    {lines<data.length && <button onClick={handleMore} className="more">View More</button>}
                </div>
            );
        default:
            return <></>;
    }
}

export default Table
