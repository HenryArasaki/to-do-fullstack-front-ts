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
        <div className="bg-teal-100 h-screen flex items-center justify-center">
            <div>
            <h2 className="text-3xl">Login</h2>
            <form onSubmit={handleSubmit} className="px-7 py-3 bg-teal-200 w-fit rounded-md shadow-md flex flex-col justify-start items-start">
                <div className="p-2 flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id ="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="p-2 flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Submit</button>

            </form>

            <Link to={"/signUp"} className="text-right">SignUp</Link>
            </div>
        </div>
    )
}