import { createContext,useContext,useState,useEffect } from "react";

import { api } from "../service/api";

export const AuthContext = createContext({})



function AuthProvider({children}:{children:JSX.Element}){
    const [data,setData] = useState({})

    async function signIn({email,password}:{email:string,password:string}) {
        try{
            const response = await api.post("/api/login",{email,password})
            const {user,authJwtToken} = response.data

            localStorage.setItem("@todo:user",JSON.stringify(user))
            localStorage.setItem("@todo:token",authJwtToken)

            api.defaults.headers.common["Authorization"] = `Bearer ${authJwtToken}`
            setData({user,authJwtToken})
        }
        catch(error:any){
            alert(error.response.data.message)
        }
    }

    function signOut(){
        localStorage.removeItem("@todo:user")
        localStorage.removeItem("@todo:token")

        setData({})
    }

    useEffect(()=>{
        const token = localStorage.getItem("@todo:token")
        const user = localStorage.getItem("@todo:user")

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({
                token,
                user:JSON.parse(user)
            })
        }
    },[])

    return(<AuthContext.Provider value={{signIn,user:data.user,signOut}}>
    {children}
    </AuthContext.Provider>)

}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}