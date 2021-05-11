import { pow } from "../math";
import { cutOff } from "../sum";


export default function real(string){
    let whole=0, fraction=0, sign;
    if(!(/^-?\d+.?\d*$/.test(string))) return null;
    sign=(string[0]==="-" ? -1: 1);

    const short=(string[0]==="-" ? cutOff(string, 1, string.length-1): string);
    const shortLen=short.length;
    const point=short.indexOf(".");
    
    if(point===-1){
        for(let i=0; i<shortLen; i++) whole+=Number(short[i])*pow(10, shortLen-i-1);
        return sign*whole;
    }else{
        fraction=cutOff(short, point+1, shortLen-1);
        const fracLen=fraction.length;

        for(let i=0; i<fracLen; i++) whole+=Number(fraction[i])*pow(10, -i-1);
        return sign*(whole + real(cutOff(short, 0, point-1)));
    }
}