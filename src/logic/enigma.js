import syntaxError from "./error/syntaxError";
import execute from "./compute/execute";
import { cleanUp } from "./helpers/cleanUp";

function enigma(command, data){
    const response={
        //operations: AssignFunc AssignVar Compute 
        operation: null,
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };
    command=cleanUp(command);
    const err=syntaxError(command);
    if(err.flag) {
        response.result.error=true;
        response.result.text=err.text;
        return response;
    }
    return execute(command, data);
};

export default enigma;