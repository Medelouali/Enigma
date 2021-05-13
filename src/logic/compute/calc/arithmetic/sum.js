export function cutOff(cmd, index_1, index_2){
    let str="";
    if(index_1>index_2 || [index_1, index_2].some(item=>item<0 || item>=cmd.length)) return "";
    for(let i=index_1; i<=index_2; i++) str+=cmd[i];
    return str;
}

export function rightIndex(command, ind){
    let index=ind+1;
    for(; index<command.length; index++){
        if(/[^\d.]/.test(command[index])) break;
    }
    return index;
}

export function leftIndex(command, ind){
    let index=ind-1;
    for(; index>=0; index--){
        if(/[^\d.]/.test(command[index])) break;
    }
    return index;
}

export function rightNum(command, index){
    let num=null, str="";
    for(let i=index+1; i<command.length; i++){
        if(/[\d.]/.test(command[i])) str+=command[i];
        else break;
    };

    num=(str==="" ? null: Number(str));
    return num;
}

export function leftNum(command, index){
    let num=null, str="";
    for(let i=index-1; i>=0; i--){
        if(/[\d.]/.test(command[i])) str+=command[i];
        else break;
    };
    num=(str==="" ? null: Number(str.split("").reverse().join("")));
    return num;
}

export function sum(cmd){
    const expo=cmd.match(/[+-]?\d+\.?\d*e\+\d+[^e]/gi)?.map(item=>item.slice(0, item.length-1));
    const wholeRegex=/^[-+]?\d+\.?\d*[^e]|[^e.][+-]?\d+\.?\d*[^e]/gi;
    const whole=cmd.match(wholeRegex);

    console.log("expo", expo);
    console.log("whole", whole);
    return expo.concat(whole)?.map(item=>Number(item))?.reduce((a, x)=>a+x);
}
