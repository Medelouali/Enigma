import React from 'react'
import { useSelector } from "react-redux";
/*
    function={
        name,
        variables,
        parameters,
        expression,
        domaine
    }
*/

function Func({name, variables, parameters, expression, domaine}) {
    return (
        <div className="funcs">
            <div className="name">{name}</div>
            <div className="var">{`[ ${variables} ]`}</div>
            <div className="par">{`{ ${parameters} }`}</div>
            <div className="exp">{expression}</div>
            <div className="dom">{domaine}</div>
        </div>
    )
}

function Funcs() {
    const functions = useSelector(state => state.functions);
    return (
        <div className="">
            <hr />
            <Func key={"-1"} name="Function"  variables="Vars" parameters="Params" expression="Exp" domaine="Domaine"/>
            <hr />
            {functions.map((f, i)=>{
                return <Func key={`${f.name}#${i}`} name={f.name} variables={f.variables.join(" ")} 
                            expression={f.expression} parameters={f.parameters.join(" ")} 
                            domaine={f.domaine}/>
            })}
            <hr />
        </div>
    )
}

export default Funcs
