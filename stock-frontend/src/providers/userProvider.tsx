import { useState, type ReactNode } from "react";
import CreateUserContext from "../contexts/userContext";

interface User {
    id: string;
    name: string;
    email: string
}

interface UserStorageProps {
    children: ReactNode;
}

export const UserStorage = ({children}: UserStorageProps) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<User | null>(null)

    return (
        <CreateUserContext.Provider value={{name, setName, email, setEmail, password, setPassword, user, setUser}}>
            {children}
        </CreateUserContext.Provider>
    )
}
