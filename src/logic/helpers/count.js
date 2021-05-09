export function countChar(ch, command){
    let num=0;
    for(let i=0; i<command.length; i++) num+=(command[i]===ch ? 1: 0);
    return num;
}

export function countString(str, command){
    let num=0, strLen=str.length, commandLen=command.length;
    if(strLen>commandLen) return 0;
    for(let i=0; i<=commandLen-strLen; i++)if(command.slice(i, i+strLen)===str) num++;
    return num;
}