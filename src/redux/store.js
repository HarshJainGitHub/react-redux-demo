import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
// import iceCreamReducer from "./ice-cream/iceCreamReducer";
// import cakeReducer from "./cake/cakeReducer";

const store = createStore(rootReducer,applyMiddleware(logger))

export default store;