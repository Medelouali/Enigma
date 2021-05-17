import React from 'react'

function Table3({data}) {
    return (
        <div className="col-3">
            {data.map((item, i)=>{
                return <div key={`#${i}`} className="">{item}</div>
            })}
        </div>
    )
}

export default Table3