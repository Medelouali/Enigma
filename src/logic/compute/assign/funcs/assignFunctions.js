export function isAssignFunc(command){
    const regex=/\w+\([a-z_,]+\)=.+/i;
    return regex.test(command);
}

export function assignFunc(command){
    const response={
        //operations: AssignFunc AssignVar Compute 
        operation: "storeFunc",
        function: {},
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };
    return response;
}