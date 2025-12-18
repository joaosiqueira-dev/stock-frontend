import { useContext, } from "react"
import { createUser } from "../../services/utils/user"
import CreateUserContext from "../../contexts/userContext"
import DashboardIcon from '../../assets/caixa-aberta.png'
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate()
    const { name, setName, email, setEmail, password, setPassword } = useContext(CreateUserContext)!

    return (
        <div className="bg-[#0F172A] w-full h-[100vh] flex flex-col justify-center items-center">
            <img className="w-12" src={DashboardIcon} alt="" />
            <form className="flex flex-col justify-center p-6 gap-1 text-white">
            <p>Nome</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Email</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Senha</p>
            <input className="bg-[#1F2937] w-80 p-3 rounded-md" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="p-3 my-2 hover:bg-[#0F172A] hover:text-white font-bold cursor-pointer border-1 border-white rounded-md bg-white text-[#0F172A] duration-500" onClick={async() => {   

                const user = await createUser({name, email, password})
                if (user) {
                    navigate("/sign-in")
                } else {
                    alert("Este e-mail já está cadastrado.")
                }
            }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default SignUp
