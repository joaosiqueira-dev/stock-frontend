import { toast } from "react-toastify"
import api from "../api"

interface CreateProduct {
    name: string
    quantity: number
    minQuantity: number
    category: string
}

type UpdateProduct = {
    id: string
    name?: string
    quantity?: number
    minQuantity?: number
    category?: string
}

export  async function createProduct({name, quantity, minQuantity, category}: CreateProduct) {
    try {
        const { data } = await api.post('/products/create', { name, quantity, minQuantity, category })
        toast.success("Produto adicionado ao estoque")
        return data
    } catch {
        toast.error("erro ao criar produto")
    }
}

export async function getProducts() {
    const { data } = await api.get('/products')
    return data
}

export async function getProductById(id: string) {
    const { data } = await api.get(`/products/${id}`)
    return data
}

export async function updateProduct({id, name, quantity, minQuantity, category}: UpdateProduct) {
    try {
        const { data } = await api.patch(`/products/${id}`, {name, quantity, minQuantity, category})
        toast.success("Produto atualizado com sucesso")
        return data
    } catch {
        toast.error("erro ao atualizar produto")
    }
}

export async function deleteProduct(id: string) {
    try {
        const { data } = await api.delete(`/products/${id}`)
        toast.success("Produto deletado com sucesso")
        return data
    } catch {
        toast.error("erro ao deletar produto")
    }
}