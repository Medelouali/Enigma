const undefinedVars=(command, varsList)=>{
    const matches=command.match(/([a-z_]+\w*[^(])|([a-z_]+\w*)$/gi)?.map(x=>{
        if(/[a-z_]+\w*[^(]/.test(x)) return x.slice(0, x.length-1);
        else return x;
    });
    if(!matches) return [];
    return matches.filter(x=>varsList.every(v=>x!==v.name));
}

export const undefinedFuncs=(command, funcsList)=>{
    return command.match(/[a-z_]+\w*\(/gi)?.map(x=>x.slice(0, x.length-1))
        ?.filter(x=>funcsList.every(i=>i!==x));
};

export default undefinedVars;