export default function reducer(state=[], action){
    switch (action.type) {
        case "Variable":
            state=state.concat(action.payload);
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