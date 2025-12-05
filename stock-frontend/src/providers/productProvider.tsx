import { useState, type ReactNode } from "react";
import CreateProductContext from "../contexts/productContexts";


interface ProductStorageProps {
    children: ReactNode;
}

interface Product {
    id: string;
    nome: string;
    quantidade: number;
    estoqueMin: number
    categoria: string
}


export const ProductStorage = ({children}: ProductStorageProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const [nameProduct, setNameProduct] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [minQuantity, setMinQuantity] = useState(0)
    const [category, setCategory] = useState("")
    const [openModal, setOpenModal] = useState(false)

    return (
        <CreateProductContext.Provider value={{nameProduct, setNameProduct, quantity, setQuantity, minQuantity, setMinQuantity, category, setCategory, openModal, setOpenModal, products, setProducts }}>
            {children}
        </CreateProductContext.Provider>
    )
}
