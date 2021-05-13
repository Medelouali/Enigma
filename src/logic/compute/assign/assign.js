import { countChar } from "../../helpers/count";
import { assignFunc, isAssignFunc } from "./funcs/assignFunctions";
import { assignVariable, isAssignVar } from "./vars/assignVariables";

export function assignement(command){
    return countChar("=", command)===1;
}

export default function assign(command, data){
    const response={
        //operations: storeVar storeFunc Compute 
        operation: null,
        function: {},
        variable: {},
        result:{
            error: true,
            text: "Assignement Error"
        }
    };
    if(isAssignVar(command)) return assignVariable(command, data);
    if(isAssignFunc(command)) return assignFunc(command, data);
    return response;
}