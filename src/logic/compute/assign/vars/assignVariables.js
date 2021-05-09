

export function isAssignVar(command){
    const regex=/\w+=.+/i;
    return regex.test(command);
}

export function assignVariable(command){
    const response={
        //operations: AssignFunc AssignVar Compute 
        operation: "storeVar",
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };
    return response;
}