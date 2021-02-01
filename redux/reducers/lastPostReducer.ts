const initialState= {
    lastPost:{},
}

function lastPostReducer(state= initialState, action) {
    switch(action.type){
        case 'SET_LAST_POST':{
            return{
                ...state,
               lastPost:action.payload
            }
        }
        case 'CHECK_LAST_POST':{
            return{
                ...state,
               lastPost:action.payload
            }
        }
    }
    return state;
}

export default lastPostReducer
