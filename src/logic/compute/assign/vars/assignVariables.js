// import basic from "../../calc/arithmetic/basic";
import calc from "../../calc/calc";


export function isAssignVar(command){
    const regex=/\w+=.+/i;
    return regex.test(command);
}

export function assignVariable(command, data){
    const parts=command.match(/(\w+)=(.+)/i);
    const response={
        //operations: AssignFunc AssignVar Compute 
        operation: "storeVar",
        function: {},
        variable: {
            name: parts[1],
            type: "string",
            value: calc(parts[2], data).result.text,
        },
        result:{
            error: false,
            text: ""
        }
    };
    return response;
}