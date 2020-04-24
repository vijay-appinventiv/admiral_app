import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

//custom imports below
import rootReducer from "../reducer";

const enhancer = compose(applyMiddleware(thunk, logger));
/**
 * create new store 
*/
const store = createStore(rootReducer, enhancer);
export default store;