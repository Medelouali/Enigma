import { assignFunc, isAssignFunc } from "./funcs/assignFunctions";
import { assignVariable, isAssignVar } from "./vars/assignVariables";

export function assignement(command){
    return /[^=]+=[^=]+/.test(command);
}

export default function assign(command, data){
    const response={
        //operations: storeVar storeFunc Compute 
        operation: null,
        function: {},
        variable: {},
        result:{
            error: true,
            text: "Cannot assign to a constant, check out the Docs please"
        }
    };
    if(isAssignVar(command)) return assignVariable(command, data);
    if(isAssignFunc(command)) return assignFunc(command, data);
    return response;
}