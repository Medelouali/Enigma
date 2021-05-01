export function cleanUp(cmd){
    let clean="";
    for(let i=0; i<cmd.length; i++) clean+=(cmd[i]!==" " ? cmd[i]: "");
    return clean;
};

