import * as dashBoardActions from "./dashboard.const";
import update from 'immutability-helper';

const initialState = {
  data: {
    name: "Test",
    hobbies: [],
    skills : {}
  }
};

const dashboardReducer = (state = initialState, action) => {
  const actionTypes = {
    [dashBoardActions.CHANGE_USER]: () => ({
      ...state,
      data: { ...state.data, name: "Vora" }
    }),
    [dashBoardActions.SET_USER_HOBBIES] : () => ({
      ...state,
      data: {...state.data, hobbies: state.data.hobbies.concat(action.payload)}
    }),
    [dashBoardActions.SET_USER_SKILLS] : () => ({
      ...state,
      data: {...state.data, skills: {...state.data.skills, ...action.payload} }
    }),
    [dashBoardActions.SET_HOBBY] : () => ({
      ...state,
      data: {...state.data, hobbies: state.data.hobbies.concat(action.payload)}
    }),
    [dashBoardActions.SET_SKILL] : () => {
      // Immutable state update for deep level - https://github.com/kolodny/immutability-helper
      return update(state, {data: {skills: {proficient: {$push: [action.payload]} }}})
    },
    default: () => ({ ...state })
  };
  return (actionTypes[action.type] || actionTypes["default"])();
};

export default dashboardReducer;
