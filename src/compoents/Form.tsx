import {useState} from 'react'
import {api} from '../service/api'

export default function Form(){
    const [task, setTask] = useState("")

    function handleCreateTask(){
        api.post("/api/tasks",{"title":task})
    }

    return(<div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="New Task..."/>
        <button onClick={handleCreateTask}>Create Task</button>
    </div>)
}