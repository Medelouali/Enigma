import React from 'react';
import { useSelector } from "react-redux";

function Vars() {
    const variables = useSelector(state => state.variables);

    return(
        <div className="vars">
            <hr/>
            <Func name="Variable" value="Value" type="Type"/>
            <hr/>
            {variables.map(va=>{
                return <Func name={va.name} value={va.value} type={va.type}/>
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
