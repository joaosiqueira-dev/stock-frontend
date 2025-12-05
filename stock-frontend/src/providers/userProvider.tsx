import { useState, type ReactNode } from "react";
import CreateUserContext from "../contexts/userContext";

interface User {
    id: string;
    nome: string;
    email: string
}

interface UserStorageProps {
    children: ReactNode;
}

export const UserStorage = ({children}: UserStorageProps) => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<User | null>(null)

    return (
        <CreateUserContext.Provider value={{nome, setNome, email, setEmail, password, setPassword, user, setUser}}>
            {children}
        </CreateUserContext.Provider>
    )
}
