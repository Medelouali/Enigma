import syntaxError from "./error/syntaxError";
import execute from "./compute/execute";
import { cleanUp } from "./helpers/cleanUp";

function enigma(command){
    command=cleanUp(command);
    const err=syntaxError(command);
    if(err.flag) return err.text;
    return execute(command);
};

export default enigma;