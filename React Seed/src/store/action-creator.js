 /* action creartor file to create the actions with demand and avoid redundant code
 - https://redux.js.org/recipes/reducing-boilerplate*/
 
 const actionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};
export default actionCreator;
