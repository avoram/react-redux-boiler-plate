import axios from "../../environment/axios-interceptor";
import { CONFIG } from '../../environment/config'

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
