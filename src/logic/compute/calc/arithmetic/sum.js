export function rightIndex(command, ind){
    let index=ind+1;
    for(; index<command.length; index++){
        if(!(/[\d.]/.test(command[index]))) break;
    }
    return index;
}

export function leftIndex(command, ind){
    let index=ind-1;
    for(; index>=0; index--){
        if(!(/[\d.]/.test(command[index]))) break;
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

export function sum(command){
    const newCommand=(command[0]!=="-" && command[0]!=="+" ? "+" + command: command);
    const nums=[];
    for(let i=0; i<newCommand.length; i++){
        if(newCommand[i]==="-") nums.push(-rightNum(newCommand, i));
        if(newCommand[i]==="+") nums.push(rightNum(newCommand, i));
    }
    return nums.reduce((ac, item)=>ac+item);
}
