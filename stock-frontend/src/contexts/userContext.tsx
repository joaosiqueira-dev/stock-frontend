import { createContext } from "react"

interface User {
    id: string;
    name: string;
    email: string
}

interface UserContextType {
    name: string;
    setName: (nome: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const CreateUserContext = createContext<UserContextType | undefined>(undefined)

export default CreateUserContext