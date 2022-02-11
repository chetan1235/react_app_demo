import Reducer from "./Reducer";
import UserReducer from "./UserReducer"; 
import { combineReducers } from "redux";


const RootReducer = combineReducers ({
    Reducer : Reducer,
    UserReducer : UserReducer
    });

export default RootReducer;
