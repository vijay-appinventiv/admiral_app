
import { combineReducers } from "redux";
import moviesReducer from "../screens/home/reducer";

/**
 * combine all reducers
*/
const rootReducer = combineReducers({
  moviesReducer
})


export default rootReducer;