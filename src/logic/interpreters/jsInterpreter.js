import Interpreter from "js-interpreter";

const interpreter=(cmd)=>{
    const int= new Interpreter(cmd);
    int.run();
    console.log(int);
    return int.value;
};

export default interpreter;