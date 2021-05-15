export function getParams(string, exceptList){
    return string.match(/[a-z_]+/gi)?.filter(x=>exceptList.every(it=>it!==x));
}

export function isAssignFunc(command){
    const regex=/[a-z_]+\w*\(([a-z_]+\d*|([a-z_]+\d*,)+[a-z_]+\d*)\)=.+/i;
    return regex.test(command);
}

export function assignFunc(command){
    const func=command.match(/([a-z_]+\w*)\(([a-z_]+\d*|([a-z_]+\d*,)+[a-z_]+\d*)\)=(.+)/i);
    const [name, args, params]=[func[1], func[2].split(","), getParams(func[4], func[2].split(","))];

    const response={
        operation: "storeFunc",
        function: {
            name: name,
            variables: args,
            parameters: params,
            expression: func[4],
            domaine: "IR"//change it later on
        },
        variable: {},
        result:{
            error: false,
            text: ""
        }
    };
    return response;
}