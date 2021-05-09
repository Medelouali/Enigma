import { assignement } from "./assign/assign";
import assign from "./assign/assign";
import calc from "./calc/calc";

function execute(command, data){
    if(assignement(command)) return assign(command);
    return calc(command, data);
};

export default execute;