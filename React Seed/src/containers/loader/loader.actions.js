import actionCreator from "../../store/action-creator";
import * as loaderConst from "./loader.const";

export const showLoader = actionCreator(loaderConst.SHOW_LOADER);
export const hideLoader = actionCreator(loaderConst.HIDE_LOADER);

