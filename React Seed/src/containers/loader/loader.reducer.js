import * as loaderConst from "./loader.const";

const initialState = {
  showLoader: false
};

const loaderReducer = (state = initialState, action) => {
  const actionTypes = {
    [loaderConst.SHOW_LOADER]: () => ({
      ...state,
      showLoader: true
    }),
    [loaderConst.HIDE_LOADER] : () => ({
      ...state,
      showLoader: false
    }),
    default: () => ({ ...state })
  };
  return (actionTypes[action.type] || actionTypes["default"])();
};

export default loaderReducer;
