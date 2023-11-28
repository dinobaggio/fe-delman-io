import newAxios from "./newAxios";

async function getList() {
    return newAxios().get('/').then(res => res.data)
}

export default {
    getList
}