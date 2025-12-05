import api from "../api"

export  async function createProduct(nome: string, quantidade: number, estoqueMin: number, categoria: string) {
    try {
        const { data } = await api.post('/products/create', { nome, quantidade, estoqueMin, categoria })
        console.log(data)
        return data
    } catch (err) {
        console.log("erro ao criar produto", err)
    }
}

export async function getProducts() {
    try {
        const { data } = await api.get('/products')
        console.log(data)
        return data
    }
    catch (err) {
        console.log("erro ao exibir produtos", err)
    }
}

