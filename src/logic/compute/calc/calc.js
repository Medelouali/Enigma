import builtIns from "../../builtIn/builtIns";
import { replaceVariables } from "../../helpers/replaceStr";
import basic from "./arithmetic/basic";
import undefinedVars from "./arithmetic/undefinedVars";

function calc(command, data){
    const response={
        operation: null,
        function: {},
        variable: {},
        result:{
            error: false,
            text: "Calculating"
        }
    };
    const allVars=data.variables.concat(builtIns.constants);
    command=replaceVariables(command, allVars);
    const undefinedVs=undefinedVars(command, allVars);
    if(undefinedVs.length!==0){
        response.result.text=`The variable [ ${undefinedVs[0]} ] is not defined, please define it before using it`;
        return response;
    }
    response.result.text=basic(command, data);
    return response;
}
export default calc;