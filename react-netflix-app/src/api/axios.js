import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "93aeb1597efcbdd0ffcce005aeca9c13",
    language: "ko-KR",
  },
});
export default axios_instance;
