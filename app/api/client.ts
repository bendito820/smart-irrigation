import { create } from "apisauce";
// define the api
const api = create({
  baseURL: "http://esp8266-control",
  headers: { Accept: "application/vnd.github.v3+json" },
});

export default api;
