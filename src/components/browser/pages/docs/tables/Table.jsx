import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

function Table({data, colums}) {
    switch (colums) {
        case 1:
            return <div className="table">{data.map((item, i)=><Table1 data={item} key={`${item}#${i}`}/>)}</div>;
        case 2:
            return <div className="table">{data.map((item, i)=><Table2 data={item} key={`${item}#${i}`}/>)}</div>;
        case 3:
            return <div className="table">{data.map((item, i)=><Table3 data={item} key={`${item}#${i}`}/>)}</div>;
        default:
            return <></>;
    }
}

export default Table
