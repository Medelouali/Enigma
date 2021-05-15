// import basic from "../../calc/arithmetic/basic";
import calc from "../../calc/calc";


export function isAssignVar(command){
    const regex=/[a-z_]+\d*=.+/i;
    return regex.test(command);
}

export function assignVariable(command, data){
    const parts=command.match(/([a-z_]+\d*)=(.+)/i);
    const response={
        operation: "storeVar",
        function: {},
        variable: {
            name: parts[1],
            type: "Number",
            value: calc(parts[2], data).result.text,
        },
        result:{
            error: false,
            text: ""
        }
    };
    return response;
}