import React from 'react'
import { toJsx } from './algo';
import Doc from './Doc';

function generateJsx(data) {
    let jsx=<></>;
    for(let e in data){
        if(typeof data[e] ==="string")jsx=<><>{jsx}</><><Doc title={e} comp={toJsx(data[e])}/></></>;
        else jsx= <><>{jsx}</><><Doc title={e} comp={generateJsx(data[e])}/></></>;
    }
    return <>{jsx}</>;
}
function Parser({data}) {
    return <>{generateJsx(data)}</>;
}

export default Parser;
