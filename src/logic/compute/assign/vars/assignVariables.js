import builtIns from "../../../builtIn/builtIns";
import undefinedVars from "../../calc/arithmetic/undefinedVars";
import calc from "../../calc/calc";


export function isAssignVar(command){
    const regex=/[a-z_]+\d*=.+/i;
    return regex.test(command);
}

export function assignVariable(command, data){
    command=command + "+0";
    const parts=command.match(/([a-z_]\w*)=(.+)/i);

    const response={
        operation: "",
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };
    const allVars=data.variables.concat(builtIns.constants);
    const undefinedVs=undefinedVars(parts[2], allVars);
    if(undefinedVs.length!==0){
        response.result.text=`The variable [ ${undefinedVs[0]} ] is not defined, please define it before using it`;
        return response;
    };
    
    if(builtIns.constants.some(x=>x.name===parts[1])){
        response.result.text=`${parts[1]} is a builtIn constant, you cannot assign to it, choose another variable name.`;
        response.result.error=true;
        return response;
    };

    response.operation="storeVar";
    response.variable={
        name: parts[1],
        type: "Number",
        value: calc(parts[2], data).result.text,
    };
    return response;
}