import { BUY_CAKE } from "./cakeTypes"

const intialState = {
    noOfCakes : 10
}

const cakeReducer = (state=intialState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.noOfCakes - 1
            }
        default: 
            state
    }
}

export default cakeReducer;