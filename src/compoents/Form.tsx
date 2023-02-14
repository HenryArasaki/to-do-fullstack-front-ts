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

    return(<div className='px-7 py-3 bg-teal-200 w-fit rounded-md shadow-md'>
        <input className="mr-3"type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="New Task..."/>
        <button className={`text-white rounded-md shadow-md px-3 py-1 ${isLoading?"bg-gray-400":"bg-teal-500"}`} disabled={isLoading} onClick={handleCreateTask}>Create Task</button>
    </div>)
}