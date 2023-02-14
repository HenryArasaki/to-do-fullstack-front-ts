import { useAuth } from "../hooks/auth";


export default function Header(){

    const {signOut} = useAuth()

    return(<>
    <button className="p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600" onClick={()=>signOut()}>SignOut</button>
    </>)

}