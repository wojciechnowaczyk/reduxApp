import { combineReducers } from "redux";

import mainReducer from "./Main/main.reducer";

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
