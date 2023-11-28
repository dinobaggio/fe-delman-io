import axios from "axios";

export default function newAxios() {
    return axios.create({
        baseURL: 'https://delman-fe-api.fly.dev'
    })
}