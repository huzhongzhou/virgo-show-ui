import { combineReducers } from "redux";
import localeReducer from "./localreducer";

export const rootReducer = combineReducers({ localeReducer });

export type AppState = ReturnType<typeof rootReducer>;
