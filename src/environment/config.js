import { environment } from './environment';
export const API_BASE_URL = `${environment.baseUrl}`;
export const CONFIG = {
  APP_NAME: 'Agency Details',
  API_URLS: {
    DASHBOARD: {
      GET_USER_HOBBIES: 'getUserHobbies',
      GET_USER_SKILLS: 'getUserSkills'
    }
  }
};
