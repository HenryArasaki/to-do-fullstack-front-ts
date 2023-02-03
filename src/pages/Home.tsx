import { useState, useEffect } from "react";
import { api } from "../service/api";
import Header from "../compoents/Header";

export default function Home(){
    const [tasks,setTasks] = useState([])

    useEffect(()=>{
        api.get()
    },[])
    

    return(<>
    <Header/>
    <div>

    </div>
    
    
    </>)
}