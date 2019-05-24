import actionCreator from "../../store/action-creator";
import * as dashboardConst from "./dashboard.const";

export const getUserDetails = actionCreator(dashboardConst.GET_USER_DETAILS);
export const setUserSkills = actionCreator(
  dashboardConst.SET_USER_SKILLS,
  "payload"
);
export const setUserHobbies = actionCreator(
  dashboardConst.SET_USER_HOBBIES,
  "payload"
);
export const addHobby = actionCreator(dashboardConst.ADD_HOBBY, "payload");
export const addSkill = actionCreator(dashboardConst.ADD_SKILL, "payload");
export const setHobby = actionCreator(dashboardConst.SET_HOBBY, "payload");
export const setSkill = actionCreator(dashboardConst.SET_SKILL, "payload");
