import { environment } from './environment';
export const API_BASE_URL = `${environment.baseUrl}`;

// Setting the configuraation for error message toaster
export const ERROR_MESSAGE_TOASTER = {
  timeOut: 10000
}
export const CONFIG = {
  APP_NAME: 'Agency Details',
  API_URLS: {
    DASHBOARD: {
      GET_USER_HOBBIES: 'getUserHobbies',
      GET_USER_SKILLS: 'getUserSkills'
    }
  }
};
