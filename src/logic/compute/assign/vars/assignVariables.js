// import basic from "../../calc/arithmetic/basic";
import builtIns from "../../../builtIn/builtIns";
import calc from "../../calc/calc";


export function isAssignVar(command){
    const regex=/[a-z_]+\d*=.+/i;
    return regex.test(command);
}

export function assignVariable(command, data){
    const parts=command.match(/([a-z_]+\d*)=(.+)/i);
    const response={
        operation: "",
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };

    if(builtIns.constants.some(x=>x.name===parts[1])){
        response.result.text=`${parts[1]} is a builtIn constant, you cannot assign to it, choose another variable name.`;
        response.result.error=true;
        return response;
    }
    response.operation="storeVar";
    response.variable={
        name: parts[1],
        type: "Number",
        value: calc(parts[2], data).result.text,
    };
    return response;
}