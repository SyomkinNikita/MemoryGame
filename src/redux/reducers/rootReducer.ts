import { combineReducers } from "redux";
import { nameReducer } from "./nameReducer";

export const rootReducer = combineReducers({
  state: nameReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
