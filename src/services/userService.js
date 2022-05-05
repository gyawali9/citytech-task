import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'https://jp-dev.cityremit.global/web-api/trensaction-manager/v1/admin/dashboard/search';
class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }
}
export default new UserService();