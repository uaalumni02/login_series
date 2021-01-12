import { post } from "../utils/fetch";
import settings from "../config/configData";

const makeApiUrl = (path) => {
  return `${settings.apiBaseUrl}/api/user${path}`;
};


const login = async (username, password) => {
  const apiUrl = makeApiUrl("/login");
  const response = await post(apiUrl, { username, password });
  return response;
};

export default {
  login,
};