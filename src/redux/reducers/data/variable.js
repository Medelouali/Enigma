export default function reducer(state=[], action){
    switch (action.type) {
        case "Variable":
            const index=state.findIndex(item=>item.name===action.payload.name);
            if(index===-1) state=state.concat(action.payload);
            else state[index].value=action.payload.value;
            return state;
        default:
            return state;
    }
}

/*
    variable={
        name,
        type,
        value
    }
*/