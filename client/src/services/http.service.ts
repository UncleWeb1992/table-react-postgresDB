import axios from "axios";
import configFile from "../configFile.json";

const http = axios.create({ baseURL: configFile.apiEndPoind });

const httpServices = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default httpServices;
