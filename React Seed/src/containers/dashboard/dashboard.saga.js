//import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, call, all } from "redux-saga/effects";
import * as dashBoardConst from "./dashboard.const";
import * as dashBoardActions from "./dashboard.actions";
import { getHobbies, getSkills } from "./dashboard.apis";

function* getUserHobbies() {
  const result = yield call(getHobbies);
  yield put(dashBoardActions.setUserHobbies(result && result.hobbies));
}

function* getUserSkills() {
  const result = yield call(getSkills);
  yield put(dashBoardActions.setUserSkills(result && result.skills));
}

function* getUserInitialDetails() {

  // Making request one by one using yield one after another
  
  //  yield call(getUserHobbies);
  //  yield call(getUserSkills);

  // Making multiple request simultaneously - using all API of saga
  yield all([
     call(getUserHobbies), 
     call(getUserSkills)
  ])
}

function* addUserHobbies(action) {
  yield put(dashBoardActions.setHobby(action.payload));
}

function* addUserSkills(action) {
  yield put(dashBoardActions.setSkill(action.payload));
}

// Collective actions of dashboard saga
export function* watchDashboardAction() {
  // takeLatest will take only latest call and will cancel all other on going call
  yield takeLatest(dashBoardConst.GET_USER_DETAILS, getUserInitialDetails);

  // takeEvery will execute all the actions of similar types
  yield takeEvery(dashBoardConst.ADD_HOBBY, addUserHobbies);
  yield takeEvery(dashBoardConst.ADD_SKILL, addUserSkills);
}
