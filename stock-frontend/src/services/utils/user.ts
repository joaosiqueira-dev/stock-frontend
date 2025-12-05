import api from "../api"

interface UpdateUserData {
    nome?: string
    email?: string
    password?: string
}

export async function createUser(nome: string, email: string, password: string) {
    try {
        const { data } = await api.post('/users/register', { nome, email, password })
        console.log(data)
        return data
    }
    catch (err) {
        console.log("erro no front", err)
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const { data } = await api.post('/auth/login', { email, password })
        localStorage.setItem("token", data.token)
        console.log(data.token)
        return data
    }
    catch (err) {
        console.log("erro ao logar", err)
    }
}

export async function getUser() {
    const { data } = await api.get('/users/me')
    console.log(data)
    return data
}

export  async function updateUser(typeData: UpdateUserData) {
    const { data } = await api.patch('/users/me', typeData)
    console.log(data)
    return data
}

export  async function deleteUser() {
    const res = await api.delete('/users/me')
    
    return res
}