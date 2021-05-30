import { cutOff } from "../compute/calc/arithmetic/sum";
import error from "./error";

function symetry(cmd){
    const err={
        flag: false,
        text: ""
    };

    const indexClose=cmd.indexOf(")");
    if(indexClose!==-1){
        let str=cutOff(cmd, 0, indexClose-1);
        if(/.*\([^(]*$/.test(str)){
            const strLen=str.length;
            for(let i=strLen-1; i>=0; i--) if(str[i]==="("){ str=str.split("").splice(strLen-1-i, 1).join(""); break;};
            return symetry(str + cutOff(cmd, indexClose+1, cmd.length-1));
        }else{
            err.flag=true;
            err.text=error("Syntax Error", "Missed open parentheses");
        }
    }else{
        if(/^.*\([^)]*$/.test(cmd)){
            err.flag=true;
            err.text=error("Syntax Error", "Missed closed parentheses");
        }
    }
    return err;
}

export default symetry;