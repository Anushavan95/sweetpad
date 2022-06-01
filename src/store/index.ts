import {applyMiddleware, CombinedState, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers";
const rootReducer = combineReducers(reducers)

// @ts-ignore
export const store =  createStore<CombinedState<any>>(rootReducer, applyMiddleware(thunk))

//to type store
export type RootState = ReturnType<typeof store.getState>
//to type Dispatch
export type AppDispatch = typeof store.dispatch