const reducer =(state, action) => {
    switch (action.type) {
        case "GET_LOADING":
            return{
                ...state,
                isLoading: true,

        }
        case  "GET_STORIES":
            return{
                
                ...state,
                isLoading: false,
                hits: action.payload.hits,
            };
    
    
    }
    return state;
};

export default reducer;