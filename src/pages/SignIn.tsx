import React, { ContextType, useState } from "react"
import { useAuth } from "../hooks/auth"
import { Link } from "react-router-dom"


export default function SignIn(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {signIn} = useAuth()

    async function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault()
        signIn(email,password)
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id ="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>

            <Link to={"/signUp"}>SignUp</Link>
        </div>
    )
}