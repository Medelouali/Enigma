export default function reducer(state=[], action){
    switch (action.type) {
        case "Function":
            state=state.concat(action.payload);
            return state;
        default:
            return state;
    }
}
/*
    function={
        name,
        variableList,
        expression
    }
*/