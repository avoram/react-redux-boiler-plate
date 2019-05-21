import { combineReducers } from "redux";
// import { reducer as toastrReducer } from "react-redux-toastr";
// import { loadingBarReducer } from "react-redux-loading-bar";

import dashboardReducer from "./dashboard/dashboard.reducer";

const rootReducer = combineReducers({
    dashboardReducer
  // toastr: toastrReducer,
  // loadingBar: loadingBarReducer
});
export default rootReducer;
