const undefinedVars=(command, varsList)=>{
    const matches=command.match(/([a-z_]+[\d_]*[^(])|([a-z_]+[\d_]*)$/gi)?.map(x=>{
        if(x[x.length-1]==="(") return x.slice(0, x.length-1);
        else return x;
    });
    if(!matches) return [];
    return matches.filter(x=>varsList.every(v=>v!==x));
}

export const undefinedFuncs=(command, funcsList)=>{
    return command.match(/[a-z_]+[\d_]*\(/gi)?.map(x=>x.slice(0, x.length-1))
        ?.filter(x=>funcsList.every(i=>i!==x));
};

export default undefinedVars;