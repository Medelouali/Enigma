
export function signCleaner(command){
    while(/[+]{2}/.test(command)) command=command.replace("++", "+");
    while(/[-]{2}/.test(command)) command=command.replace("--", "+");
    while(/[-][+]/.test(command)) command=command.replace("-+", "-");
    while(/[+][-]/.test(command)) command=command.replace("+-", "-");
    const matches=command.match(/0x[0-9a-f]+/gi);
    if(matches)
        for(let i=0; i<matches.length; i++) command=command.replace(matches[i], Number(matches[i]));
    return command;
}

export function cleanUp(cmd){
    let clean="";
    for(let i=0; i<cmd.length; i++) clean+=(cmd[i]!==" " ? cmd[i]: "");
    return clean;
};

