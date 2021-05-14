import syntaxError from "./error/syntaxError";
import execute from "./compute/execute";
import { cleanUp, signCleaner } from "./helpers/cleanUp";

function enigma(command, data){
    const response={
        operation: null,
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };

    command=cleanUp(command);
    command=signCleaner(command);
    const err=syntaxError(command);
    if(err.flag) {
        response.result.error=true;
        response.result.text=err.text;
        return response;
    }

    return execute(command, data);
};

export default enigma;