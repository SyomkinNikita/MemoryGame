import { combineReducers } from "redux";
import { nameReducer } from "@redux/reducers/stateReducer";
import { countReducer } from "@redux/reducers/countReducer";

export const rootReducer = combineReducers({
  state: nameReducer,
  count: countReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
