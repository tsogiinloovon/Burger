import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-952cc-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default instance;
