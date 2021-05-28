export default function reducer(state=[], action){
    switch (action.type) {
        case "Function":
            const index=state.findIndex(x=>x.name===action.payload.name);
            if(index===-1)state=state.concat(action.payload);
            else state[index]=action.payload; 
            return state;
        default:
            return state;
    }
}
/*
    function={
        name: "",
        variables: [],
        parameters, [],
        domaine: "",
        expression: ""
    }
*/