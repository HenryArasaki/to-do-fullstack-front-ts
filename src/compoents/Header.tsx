import { useAuth } from "../hooks/auth";


export default function Header(){

    const {signOut} = useAuth()

    return(<>
    
    <button className="ml-7" onClick={()=>signOut()}>SignOut</button>
    </>)

}