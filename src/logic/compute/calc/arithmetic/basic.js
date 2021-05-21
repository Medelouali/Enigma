import error from "../../../error/error";
import { signCleaner } from "../../../helpers/cleanUp";
import { abs, facto, floor, pow } from "./math";
import { logical } from "./operators";
import { cutOff, leftIndex, leftNum, rightIndex, rightNum, sum } from "./sum";


export function basic(cmd, data){
    const inner=cmd.match(/[+-]\([^()]+\)/gi).map(x=>x.slice(2, x.length-1));
    if(!inner) return innerBasic(cmd);
    for(let i=0; i<inner.length; i++) {
        cmd=cmd.replace(inner[i], signCleaner(inner[i][0] + innerBasic(inner[i])));
    };
    return innerBasic(cmd, data);
}

function innerBasic(command, data){
    const cmd=signCleaner(command);
    const log=logical(cmd, data);
    const [factIndex, powIndex, restIndex, multIndex, devIndex, wholeDev]=[ 
                            cmd.indexOf("!"), cmd.indexOf("^"), cmd.indexOf("%"), 
                            cmd.indexOf("*"), cmd.indexOf("/"), cmd.indexOf("//") ];
    if(log!==false){
        return log;
    }else if(factIndex !== -1)
        return innerBasic(cutOff(cmd, 0, leftIndex(cmd, factIndex), cmd.length-1) + 
            facto(Number(leftNum(cmd, factIndex))).toString() + cutOff(cmd, factIndex+1, cmd.length-1));
    else if(restIndex!==-1){
        const rem=abs(floor(Number(leftNum(cmd, restIndex)))) % abs(floor(Number(rightNum(cmd, restIndex))));
        return innerBasic(cutOff(cmd, 0, leftIndex(cmd, restIndex), cmd.length-1) + 
                rem.toString()+
                cutOff(cmd, rightIndex(cmd, restIndex), cmd.length-1));
    }else if(powIndex !== -1){
        if(cmd[powIndex+1]==="-"){
            return innerBasic(cutOff(cmd, 0, leftIndex(cmd, powIndex), cmd.length-1) + 
                pow(Number(leftNum(cmd, powIndex)), -Number(rightNum(cmd, powIndex+1))).toString()+
                cutOff(cmd, rightIndex(cmd, powIndex+1), cmd.length-1));
        }else{
            return innerBasic(cutOff(cmd, 0, leftIndex(cmd, powIndex), cmd.length-1) + 
                pow(Number(leftNum(cmd, powIndex)), Number(rightNum(cmd, powIndex))).toString()+
                cutOff(cmd, rightIndex(cmd, powIndex), cmd.length-1));
        }
    }else if(multIndex !== -1){
        return innerBasic(cutOff(cmd, 0, leftIndex(cmd, multIndex), cmd.length-1) + 
                `${Number(leftNum(cmd, multIndex))* Number(rightNum(cmd, multIndex))}`+
                cutOff(cmd, rightIndex(cmd, multIndex), cmd.length-1));
    }else if(wholeDev !== -1){
        return innerBasic(cutOff(cmd, 0, leftIndex(cmd, wholeDev), cmd.length-1) + 
                `${floor(Number(leftNum(cmd, wholeDev))/Number(rightNum(cmd, wholeDev+1)))}`+
                cutOff(cmd, rightIndex(cmd, wholeDev+1), cmd.length-1));
    }else if(devIndex !== -1){
        if(Number(rightNum(cmd, devIndex))===0) return error("Computation Error", "division by 0");
        return innerBasic(cutOff(cmd, 0, leftIndex(cmd, devIndex)) + 
                + `${Number(leftNum(cmd, devIndex)) / Number(rightNum(cmd, devIndex))}`+
                cutOff(cmd, rightIndex(cmd, devIndex), cmd.length-1));
    }else return sum(cmd);
}

export default innerBasic;