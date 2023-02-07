import {useState} from 'react'
import {api} from '../service/api'

export default function Form({fetchTasks}:{fetchTasks:()=>void}){
    const [task, setTask] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleCreateTask(){
        await setIsLoading(true)
        api.post("/api/tasks",{"title":task})
        .then(()=>fetchTasks())
        .then(()=>setTask(""))
        .then(()=>setIsLoading(false))
    }

    return(<div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="New Task..."/>
        <button disabled={isLoading} onClick={handleCreateTask}>Create Task</button>
    </div>)
}