import { useState, useEffect } from "react";
import { api } from "../service/api";
import Header from "../compoents/Header";


type Task = {
    id: number;
    title: string;
    done: boolean;
    createdAt: string
    lastUpdatedAt:string
  };

type GetTasksResponse = {
        tasks:Task[]
  };

export default function Home(){
    const [tasks,setTasks] = useState<Task[]>([])

    useEffect(()=>{
        api.get<GetTasksResponse>("/api/tasks")
        .then(response=>setTasks(response.data.tasks))
        // .then((res)=>console.log(res.data.tasks))
        .then(()=>console.log(tasks))
    },[])
    

    return(<>
    <Header/>
    <div>
        {tasks.map((task,index)=><h4 key={index}>{task.title}</h4>)}

    </div>
    </>)
}