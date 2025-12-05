import { createContext } from "react"

interface Product {
    id: string;
    nome: string;
    quantidade: number;
    estoqueMin: number;
    categoria: string
}

interface ProductContextType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    nameProduct: string;
    setNameProduct: (nameProduct: string) => void;
    quantity: number;
    setQuantity: (quantity: number) => void;
    minQuantity: number;
    setMinQuantity: (minQuantity: number) => void;
    category: string;
    setCategory: (category: string) => void
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void
}

const CreateProductContext = createContext<ProductContextType | undefined>(undefined)

export default CreateProductContext