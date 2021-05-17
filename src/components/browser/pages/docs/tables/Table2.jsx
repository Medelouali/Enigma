import React from 'react';

function Table2({data}) {
    return (
        <div className="col-2">
            {data.map((item, i)=>{
                return <div key={`#${i}`} className="">{item}</div>
            })}
        </div>
    )
}

export default Table2;