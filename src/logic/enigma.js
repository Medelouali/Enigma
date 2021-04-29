import syntaxError from "./error/syntaxError";
import execute from "./compute/execute";

function enigma(command){
    const err=syntaxError(command);
    if(err.flag) return err.text;
    return execute(command);
};


export default enigma;