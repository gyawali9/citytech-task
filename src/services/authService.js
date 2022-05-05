import axios from "axios";
const API_URL = "https://jp-dev.cityremit.global/web-api/config/v1/auths/";


const AuthService = (login_id, login_password) =>{
    return axios
      .post(API_URL + "login", {
        login_id,
        login_password
      })
      .then(response => {
        console.log(response)
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
}
export default AuthService;