import { toast } from "react-toastify"
import api from "../api"

interface CreateUserData {
    name: string
    email: string
    password: string
}

// interface UpdateUserData extends Partial<CreateUserData> {}

export async function createUser({name, email, password}: CreateUserData) {
    try {
        const { data } = await api.post('/users/register', { name, email, password })
        toast.success("Usuário cadastrado com sucesso")
        return data
    }
    catch (err: any) {
        const message = err.response?.data?.message || "Erro ao cadastrar usuário"
        toast.error(message)
        throw err
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const { data } = await api.post('/auth/login', { email, password })
        localStorage.setItem("token", data.token)
        toast.success("Login realizado com sucesso")
        return data
    }
    catch {
        toast.error("E-mail ou senha inválidos")
    }
}

export async function getUser() {
    const { data } = await api.get('/users/me')
    console.log(data)
    return data
}

// export  async function updateUser(typeData: UpdateUserData) {
//     const { data } = await api.patch('/users/me', typeData)
//     console.log(data)
//     return data
// }

// export  async function deleteUser() {
//     const res = await api.delete('/users/me')
    
//     return res
// }

