import { countChar } from "../../helpers/count";
import { assignFunc, isAssignFunc } from "./funcs/assignFunctions";
import { assignVariable, isAssignVar } from "./vars/assignVariables";

export function assignement(command){
    return countChar("=", command)===1;
}

export default function assign(command){
    const response={
        //operations: AssignFunc AssignVar Compute 
        operation: null,
        function: {},
        variable: {},
        result:{
            error: true,
            text: "Assignement Error"
        }
    };
    if(isAssignVar(command)) return assignVariable(command);
    if(isAssignFunc(command)) return assignFunc(command);
    return response;
}