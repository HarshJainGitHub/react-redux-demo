import { BUY_CAKE } from "./cakeTypes"

const intialState = {
    noOfCakes : 10
}

const cakeReducer = (state=intialState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - action.payload
            }
        default: 
            return state
    }
}

export default cakeReducer;