import { createContext } from "react"

interface UserContextType {
    nome: string;
    setNome: (nome: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

const CreateUserContext = createContext<UserContextType | undefined>(undefined)

export default CreateUserContext