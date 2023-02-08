import { useState, useEffect } from "react";
import { api } from "../service/api";
import Header from "../compoents/Header";
import Form from "../compoents/Form";


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

    async function fetchTasks(){
        api.get<GetTasksResponse>("/api/tasks")
        .then(response=>setTasks(response.data.tasks))
    }

    useEffect(()=>{
        fetchTasks()
    },[])
    

    return(<div className="bg-teal-100 h-screen">
    <Header/>
    <Form fetchTasks={fetchTasks}/>
    <div className="bg-teal-400 p-7">
        <ul>
            {tasks.map((task,index)=><li key={index}>{task.title}</li>)}
        </ul>

    </div>
    </div>)
}