  const appreducer = (state, action) => {
    if (action.type === "Home_update") {
        return {
            ...state,
            image: action.payload.image,
            para: action.payload.para,
        };
    }

     if (action.type === "About_update") {
        return {
            ...state,
            image: action.payload.image,
            para: action.payload.para,
        };
    }
    return state;
}

export default appreducer;