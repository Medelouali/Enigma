
export function replaceStr(command, oldValue, newValue){
    const index=command.indexOf(oldValue);
    if(index!==-1){
        let flag=false, valueLen=oldValue.length, cmdLen=command.length;
        if(valueLen===cmdLen) flag=true;
        if(index===0 && command[valueLen]!=="(" && /\W/.test(command[valueLen])) flag=true;
        if(index>0 && index+valueLen===cmdLen && /\W/.test(command[index-1])) flag=true;
        if(index>0 && index+valueLen<=cmdLen-1)
            if(/\W/.test(command[index-1]) && /\W/.test(command[index+valueLen])) flag=true;
        if(flag)
            return replaceStr(command.replace(oldValue, newValue), oldValue, newValue);
    }
    return command;
}

export function replaceVariables(command, variables){
    if(variables)
        for(let i=0; i<variables.length; i++)
            command=replaceStr(command, variables[i].name, variables[i].value);
    return command;
}
