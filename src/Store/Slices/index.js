import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";


const rootReducer = combineReducers({
    counterSlice : counterSlice
})

export default rootReducer

