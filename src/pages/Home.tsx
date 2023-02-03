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

    useEffect(()=>{
        api.get<GetTasksResponse>("/api/tasks")
        .then(response=>setTasks(response.data.tasks))
        // .then((res)=>console.log(res.data.tasks))
        .then(()=>console.log(tasks))
    },[])
    

    return(<>
    <Header/>
    <Form/>
    <div>
        <ul>
            {tasks.map((task,index)=><li key={index}>{task.title}</li>)}
        </ul>

    </div>
    </>)
}