

export function replaceStr(command, oldValue, newValue){
    const index=command.indexOf(oldValue);
    if(index!==-1){
        if(/[^w(]/.test(command[index+oldValue.length]))
            return replaceStr(command.replace(oldValue, newValue), oldValue, newValue);
    };
    return command;
}

export function replaceVariables(command, variables){
    if(variables)
        for(let i=0; i<variables.length; i++)
            command=replaceStr(command, variables[i].name, variables[i].value);
    return command;
}
