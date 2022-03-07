import axios from "axios";
const fetchClient = () => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: process.env.VUE_APP_BASE_API,
  };

  // Create instance
  const instance = axios.create(defaultOptions);
  return instance;
};

export default fetchClient();
