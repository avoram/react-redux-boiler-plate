import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from './dashboard/dashboard.reducer';
import loaderReducer from './loader/loader.reducer';

const rootReducer = combineReducers({
    dashboardReducer,
    loaderReducer: loaderReducer,
    toastr: toastrReducer
});
export default rootReducer;
