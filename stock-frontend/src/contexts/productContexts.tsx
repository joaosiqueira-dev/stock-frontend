import { createContext } from "react"

interface Product {
    id: string;
    name: string;
    quantity: number;
    minQuantity: number;
    category: string
}

interface ProductContextType {
    product: Product | null;
    setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    name: string;
    setName: (nameProduct: string) => void;
    quantity: number;
    setQuantity: (quantity: number) => void;
    minQuantity: number;
    setMinQuantity: (minQuantity: number) => void;
    category: string;
    setCategory: (category: string) => void
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void
    openEditModal: boolean;
    setOpenEditModal: (openModal: boolean) => void
    id: string;
    setId: (id: string) => void;
}

const CreateProductContext = createContext<ProductContextType | undefined>(undefined)

export default CreateProductContext