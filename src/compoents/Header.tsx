import { useAuth } from "../hooks/auth";


export default function Header(){

    const {signOut} = useAuth()

    return(<>
    
    <button onClick={()=>signOut()}>SignOut</button>
    </>)

}