import builtIns from "../../builtIn/builtIns";
import { replaceVariables } from "../../helpers/replaceStr";
import basic from "./arithmetic/basic";

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
    command=replaceVariables(command, data.variables.concat(builtIns.constants));
    response.result.text=basic(command, data);
    return response;
}
export default calc;