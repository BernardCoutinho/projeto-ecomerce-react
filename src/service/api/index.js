import axios from "axios";

const Api = axios.create({
    baseURL: "https://api-da-lojinha.herokuapp.com/"
});

export default Api;
