
export const special=(cmd)=>{
    const commands=["$clear", "$clearVars", "$clearFuncts", "$variables", "$functions"],
            lower=cmd.toLowerCase();
    return commands.some(x=>x===lower);   
}
