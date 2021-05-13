
// ! -> ^ -> *, / -> +, -;

import { facto, pow } from "./math";
import { cutOff, leftIndex, leftNum, rightIndex, rightNum, sum } from "./sum";

function basic(cmd){
    const [factIndex, powIndex, multIndex, devIndex]=[ cmd.indexOf("!"), cmd.indexOf("^"), 
                                                     cmd.indexOf("*"), cmd.indexOf("/") ];
    if(factIndex !== -1)
        return basic(cutOff(cmd, 0, leftIndex(cmd, factIndex), cmd.length-1) + 
            facto(Number(leftNum(cmd, factIndex))).toString() + cutOff(cmd, factIndex+1, cmd.length-1));
    else if(powIndex !== -1){
        if(cmd[powIndex+1]==="-"){

        }else{
            return basic(cutOff(cmd, 0, leftIndex(cmd, powIndex), cmd.length-1) + 
                pow(Number(leftNum(cmd, powIndex)), Number(rightNum(cmd, powIndex))).toString()+
                cutOff(cmd, rightIndex(cmd, powIndex), cmd.length-1));
        }
    }else if(multIndex !== -1){
        return basic(cutOff(cmd, 0, leftIndex(cmd, multIndex), cmd.length-1) + 
                `${Number(leftNum(cmd, multIndex))* Number(rightNum(cmd, multIndex))}`+
                cutOff(cmd, rightIndex(cmd, multIndex), cmd.length-1));
    }else if(devIndex !== -1){
        return basic(cutOff(cmd, 0, leftIndex(cmd, devIndex)) + 
                + `${Number(leftNum(cmd, devIndex)) / Number(rightNum(cmd, devIndex))}`+
                cutOff(cmd, rightIndex(cmd, devIndex), cmd.length-1));
    }else return sum(cmd);
}

export default basic;