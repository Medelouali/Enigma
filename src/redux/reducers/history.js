

const reducer=(state=[], action)=>{
    switch (action.type) {
        case "History":
            state=state.concat([action.payload]);
            return state;
        default:
            return state;
    }
}

export default reducer;