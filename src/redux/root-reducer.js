import { combineReducers } from "redux";
import cartReducer from "./book/reducer";

const rootReducer = combineReducers({cartReducer})

export default rootReducer;