import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
export default axios.create({
  baseURL: BASE_URL,
});
