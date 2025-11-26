import { useState, type ReactNode } from "react";
import CreateUserContext from "../contexts/userContext";



interface UserStorageProps {
    children: ReactNode;
}



export const UserStorage = ({children}: UserStorageProps) => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <CreateUserContext.Provider value={{nome, setNome, email, setEmail, password, setPassword}}>
            {children}
        </CreateUserContext.Provider>
    )
}
