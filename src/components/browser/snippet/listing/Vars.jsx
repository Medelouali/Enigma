import React from 'react';
import { useSelector } from "react-redux";

function Vars() {
    const variables = useSelector(state => state.variables);
    if(variables.length===0) return <div className=""></div>;
    return(
        <div className="vars">
            <hr/>
            <Func key={"-1"} name="Variable" value="Value" type="Type"/>
            <hr/>
            {variables.map((va, i)=>{
                return <Func key={va.name+i} name={va.name} value={va.value} type={va.type}/>
            })}
            <hr/>
        </div>
    )
}

function Func({name, value, type}) {
    return(
        <div className="func">
            <div className="name">{name}</div>
            <div className="value">{value}</div>
            <div className="type">{`[ ${type} ]`}</div>
        </div>
    );
}
export default Vars
