import { useContext, } from "react"
import { createUser } from "../../services/utils/user"
import CreateUserContext from "../../contexts/userContext"
import DashboardIcon from '../../assets/dashboard-icon.png'

function SignUp() {
    const { nome, setNome, email, setEmail, password, setPassword } = useContext(CreateUserContext)!

    return (
        <div className="bg-[#0F172A] w-full h-[100vh] flex flex-col justify-center items-center">
            <img className="w-12" src={DashboardIcon} alt="" />
            <form className="flex flex-col justify-center p-6 gap-1 text-white">
            <p>Nome</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" value={nome} onChange={(e) => setNome(e.target.value)} />
            <p>Email</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Senha</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="p-3 my-2 hover:bg-[#0F172A] hover:text-white font-bold cursor-pointer border-1 border-white rounded-md bg-white text-[#0F172A] duration-500" onClick={() => createUser(nome, email, password)}>Cadastrar</button>
            </form>
        </div>
    )
}

export default SignUp
