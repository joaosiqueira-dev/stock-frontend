import { createContext } from "react"

interface User {
    id: string;
    nome: string;
    email: string
}

interface UserContextType {
    nome: string;
    setNome: (nome: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const CreateUserContext = createContext<UserContextType | undefined>(undefined)

export default CreateUserContext