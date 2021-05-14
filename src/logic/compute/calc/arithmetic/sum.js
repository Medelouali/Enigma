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
    let nums=[], temp=(/[-+]/.test(cmd[0]) ? cmd: "+" + cmd), sign=1;
    const expo=temp.match(/[+-]?\d+\.?\d*e\+\d+/gi)?.map(x=>x.slice(0, x.length-1));
    expo?.forEach(e=>{
        nums.push(Number(e));
        temp=temp.replace(e, "+0");
    });
    for(let i=0; i<temp.length; i++){
        sign=(temp[i]==="+" ? 1:(temp[i]==="-"? -1: 0));
        if(sign) nums.push(sign*Number(rightNum(temp, i)));
    }
    return nums.reduce((a, x)=>x+a);
}

