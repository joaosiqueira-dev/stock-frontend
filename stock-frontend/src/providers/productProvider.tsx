import { useState, type ReactNode } from "react";
import CreateProductContext from "../contexts/productContexts";


interface ProductStorageProps {
    children: ReactNode;
}

interface Product {
    id: string;
    name: string;
    quantity: number;
    minQuantity: number
    category: string
}


export const ProductStorage = ({children}: ProductStorageProps) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [minQuantity, setMinQuantity] = useState(0)
    const [category, setCategory] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [id, setId] = useState("")

    return (
        <CreateProductContext.Provider value={{name, setName, quantity, setQuantity, minQuantity, setMinQuantity, category, setCategory, openModal, setOpenModal, products, setProducts, openEditModal, setOpenEditModal, id, setId, product, setProduct }}>
            {children}
        </CreateProductContext.Provider>
    )
}
