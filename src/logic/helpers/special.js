
export const special=(cmd)=>{
    const commands=["$clear", "$clearVars", "$clearFuncts"], lower=cmd.toLowerCase();
    return commands.some(x=>x===lower);   
}
