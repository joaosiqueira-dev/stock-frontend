import api from "../api"

interface UpdateUserData {
    nome?: string
    email?: string
    password?: string
}

export  async function createUser(nome: string, email: string, password: string) {
    const { data } = await api.post('/users/register', { nome, email, password })
    console.log(data)
    return data
}

export  async function loginUser(email: string, password: string) {
    const { data } = await api.post('/auth/login', { email, password })
    console.log(data)
    return data
}

export  async function getUser(token: string) {
    const { data } = await api.get('/users/me', {headers: {Authorization: `${token}`}})
    console.log(data)
    return data
}

export  async function updateUser(typeData: UpdateUserData, token: string) {
    const { data } = await api.patch('/users/me', typeData, {headers: {Authorization: `Bearer ${token}`}})
    console.log(data)
    return data
}

export  async function deleteUser(token: string) {
    const res = await api.delete('/users/me', {headers: {Authorization: `Bearer ${token}`}})
    
    return res
}