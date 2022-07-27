import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

export const restAPI = {
  async getUsers(count, setIsLoading) {
    return instance
      .get(`/users?page=1&count=${count}`)
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  },
  async getToken() {
    return instance
      .get("/token")
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  },
  async registerUser(data, token) {
    return instance
      .post("/users", data, {
        headers: { Token: token },
      })
      .then((response) => response.data)
      .catch(function (error) {
        console.log(error);
      });
  },
};

export default restAPI;
