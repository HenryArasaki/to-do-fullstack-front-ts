import { Link, useNavigate } from "react-router-dom"
import { api } from "../service/api"
import { SyntheticEvent, useState } from "react"


export default function SignUp(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const navigate = useNavigate();

    async function handleSubmit(e:SyntheticEvent){
        e.preventDefault()

        if(!email || !password || !confirmPassword){
            return alert("Preencha todos os campos")
        }

        if(password !== confirmPassword){
            return alert("Senhas diferentes")
        }

        try{
            await api.post("/api/users",{email,password,confirmPassword})
            alert("Cadastro efetuado com sucesso")
            navigate("/")
        }
        catch(error){
            alert("Não foi possivel cadastrar")
        }
        
    }

    return(
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id ="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>

            <Link to="/">SignIn</Link>
        </div>
    )
}