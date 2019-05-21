//import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, call, all } from "redux-saga/effects";
import * as dashBoardActions from "./dashboard.const";
import { getHobbies, getSkills } from "./dashboard.apis";

function* getUserHobbies() {
  const result = yield call(getHobbies);
  yield put({
    type: dashBoardActions.SET_USER_HOBBIES,
    payload: result && result.hobbies
  });
}

function* getUserSkills() {
  const result = yield call(getSkills);
  yield put({
    type: dashBoardActions.SET_USER_SKILLS,
    payload: result && result.skills
  });
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
  yield put({
    type: dashBoardActions.SET_HOBBY,
    payload: action.payload
  });
}

function* addUserSkills(action) {
  yield put({
    type: dashBoardActions.SET_SKILL,
    payload: action.payload
  });
}

// Collective actions of dashboard saga
export function* watchDashboardAction() {
  // takeLatest will take only latest call and will cancel all other on going call
  yield takeLatest(dashBoardActions.GET_USER_DETAILS, getUserInitialDetails);

  // takeEvery will execute all the actions of similar types
  yield takeEvery(dashBoardActions.ADD_HOBBY, addUserHobbies);
  yield takeEvery(dashBoardActions.ADD_SKILL, addUserSkills);
}
