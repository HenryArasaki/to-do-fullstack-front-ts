import { useState, useEffect } from "react";
import { api } from "../service/api";
import Header from "../compoents/Header";
import Form from "../compoents/Form";
import TaksItem from "../compoents/TaksItem"


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
        const response = await api.get<GetTasksResponse>("/api/tasks")
        await setTasks(response.data.tasks)
        console.log(tasks)
    }

    useEffect(()=>{
        fetchTasks()
    },[])
    

    return(<div className="bg-teal-100 h-screen">
    <Header/>
    <Form fetchTasks={fetchTasks}/>
    <div className="p-7">
        <ul>
            {tasks.map((task,index)=><TaksItem key={index} id={task.id} title={task.title} done={task.done} tasks={tasks} setTasks={setTasks} />)}
        </ul>

    </div>
    </div>)
}