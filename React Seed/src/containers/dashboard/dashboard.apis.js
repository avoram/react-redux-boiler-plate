import axios from "../../utils/axios-interceptor";
import { CONFIG } from '../../utils/app.config'

console.log('axios ', axios)

export const getHobbies = data => {
  return axios
    .get(`${CONFIG.API_URLS.DASHBOARD.GET_USER_HOBBIES}`)
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
      throw err;
    });
};

export const getSkills = data => {
    return axios
      .get(`${CONFIG.API_URLS.DASHBOARD.GET_USER_SKILLS}`)
      .then(function(response) {
        return response;
      })
      .catch(function(err) {
        throw err;
      });
  };
