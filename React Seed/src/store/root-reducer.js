import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from '../containers/dashboard/dashboard.reducer';
import loaderReducer from '../containers/loader/loader.reducer';

const rootReducer = combineReducers({
    dashboardReducer,
    loaderReducer: loaderReducer,
    toastr: toastrReducer
});
export default rootReducer;
