import React, { useState } from "react"
import { api } from "../service/api"

export default function SignIn(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault()
        api.post("/api/login",{email,password})
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
        </div>
    )
}