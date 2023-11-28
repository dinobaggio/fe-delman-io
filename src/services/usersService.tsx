import newAxios from "./newAxios"

function getList() {
    return newAxios().get('/users').then(res => res.data)
}

interface User {
    id?: number
    name: string
    email: string
}

function postRegister(data: User) {
    return newAxios().post('/users', data).then(res => res.data)
}

function getDetail(uuid: string) {
    return newAxios().get(`/users/${uuid}`).then(res => res.data)
}

function postDelete(uuid: string) {
    return newAxios().delete(`/users/${uuid}`)
}

function putUpdate(data: User) {
    return newAxios().put(`/users/${data.id}`, data)
}

export default {
    getList,
    postRegister,
    getDetail,
    postDelete,
    putUpdate
}