const err={
    flag: false,
    notice: ""
};

const error=(state=err, action)=>{
    switch (action.type) {
        case "Error":
            state=action.payload;
            return state;
        default:
            return state;
    }    
};

export default error;