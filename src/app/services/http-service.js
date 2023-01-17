import axios from "axios";

const http = axios.create({
  baseURL:
    "https://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=hotel&limit=10",
});

const httpService = {
  get: http.get,
};
export default httpService;
