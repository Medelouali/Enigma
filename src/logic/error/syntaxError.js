import matrix from "../variables/syntaxMatrix";

const acceptable="zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=";

function oneIn(string, ch){
    let flag=false;
    for(let i=0; i<string.length; i++){
        if(string[i]===ch){
            flag=true;
            break;
        };
    };
    return flag;
};

function allIn(big, small){
    let flag=true, i=0, text="";
    for(; i<small.length; i++){
        if(!oneIn(big, small[i])){
            flag=false;
            text=small[i] + " is not acceptable as a character, please check out the Docs for more details 📝"
            break;
        };
    };

    return {
        flag,
        text
    }
}

function order(command){
    const err={
        flag: false,
        text: ""
    };
    const cmd=`#${command}$`;
    const row=`#${acceptable}`, colum=`${acceptable}$`;
    let index1=-1, index2=-1;
    for(let i=0; i<cmd.length-1; i++){
        index1=row.indexOf(cmd[i]);
        index2=colum.indexOf(cmd[i+1]);
        if(matrix[index1][index2]==="0"){
            err.flag=true;
            if(row[index1]==="#"){
                err.text=`Syntax Error: ${cmd[i+1]} cannot be used at the beginning of a command
                , please check out the Docs 📝`;
            }else if(colum[index2]==="$"){
                err.text=`Syntax Error: ${cmd[i]} cannot be used at the end of a command
                , please check out the Docs 📝`;
            }else{
                err.text=`Syntax Error: ${cmd[i]} cannot be followed by ${cmd[i+1]} in a command
                , please check out the Docs 📝`;
            };
            break;
        };
    };
    return err;
};

function syntaxError(command){
    const err={
        flag: false,
        text: ""
    }, reg1=/.*==.*=+/, reg2=/=+.*==.*/;

    if(command.length===0) 
        return{flag: true, text: "Please enter something, we're waiting for a command..., check the Docs for commands 📝"};
    if(reg1.test(command) || reg2.test(command)) 
        return{flag: true, text: "You are overusing the equal operator, please check out the Docs 📝"};
        
    const accept=allIn(acceptable, command);
    if(!accept.flag){
        err.flag=true;
        err.text=accept.text;
        return err;
    }
    return order(command);
};

export default syntaxError;