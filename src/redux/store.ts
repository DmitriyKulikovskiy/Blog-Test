import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import PostsReducer from "./posts-reducer";

let reducers = combineReducers({
  PostsReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
