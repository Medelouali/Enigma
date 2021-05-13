import { replaceVariables } from "../../helpers/replaceStr";
import basic from "./arithmetic/basic";

function calc(command, data){
    const response={
        //operations: storeVar storeFunc
        operation: null,
        function: {},
        variable: {},
        result:{
            error: false,
            text: "Calculating"
        }
    };
    console.log(data.variables);
    command=replaceVariables(command, data.variables);
    response.result.text=basic(command);
    return response;
}
export default calc;