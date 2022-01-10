import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState =  {
        noOfIceCream : 20
}

const iceCreamReducer = ( state = initialState , action) => {
    console.log("ice"+JSON.stringify(state));
    switch(action.type) {
        
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCream: state.noOfIceCream - action.payload
        }
        default : return state
    }
}

export default iceCreamReducer;