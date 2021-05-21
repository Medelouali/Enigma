import calc from "../calc";
import { cutOff } from "./sum";

export function logical(cmd, data) {
    const indexes={
        equal: cmd.indexOf("=="),
        notEqual: cmd.indexOf("!="),
        greater: cmd.indexOf(">"), 
        less: cmd.indexOf("<"),
        greaterOrEqual: cmd.indexOf(">="),
        lessOrEqual: cmd.indexOf("<="),
        logicalAnd: cmd.indexOf("&&"), 
        logicalOr: cmd.indexOf("||")
    };
    if(indexes.equal!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.equal-1), data).result.text===
                        calc(cutOff(cmd, indexes.equal+2, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.notEqual!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.notEqual-1), data).result.text!==
                        calc(cutOff(cmd, indexes.notEqual+2, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.logicalOr!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.logicalOr-1), data).result.text ||
                        calc(cutOff(cmd, indexes.logicalOr+2, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.logicalAnd!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.logicalAnd-1), data).result.text &&
                        calc(cutOff(cmd, indexes.logicalAnd+2, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.greater!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.greater-1), data).result.text>
                        calc(cutOff(cmd, indexes.greater+1, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.less!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.less-1), data).result.text<
                        calc(cutOff(cmd, indexes.less+1, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.greaterOrEqual!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.greaterOrEqual-1), data).result.text>=
                        calc(cutOff(cmd, indexes.greaterOrEqual+1, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else if(indexes.lessOrEqual!==-1){
        const bool=calc(cutOff(cmd, 0, indexes.lessOrEqual-1), data).result.text<=
                        calc(cutOff(cmd, indexes.lessOrEqual+1, cmd.length-1), data).result.text;
        if(bool) return "true";
        return "false";
    }else return false;
}