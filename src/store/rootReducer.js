import { combineReducers } from "redux";
import { client, } from "./reducers";


const appReducer = combineReducers({
  client: client,
});

// const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  
  // if (action.type === "LOGOUT_SUCCESS") {
  //   state = initialState;
  // }

  return appReducer(state, action);
};

export default rootReducer;
