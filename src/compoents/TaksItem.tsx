import {useState} from 'react'
import {api} from '../service/api'

export default function TaksItem({id,title,done,tasks,setTasks}:{id:number,title:string,done:boolean,tasks:any[],setTasks:React.Dispatch<React.SetStateAction<any[]>>}){


    function handleDeleteClick(){
        const newTasks = tasks.filter(element=>element.id !== id)
        setTasks(newTasks)
        api.delete(`/api/tasks/${id}`)
        // console.log(response)
        // fetchTasks()
    }

    return(<li>
        <span>{title}</span>
        <button onClick={handleDeleteClick}>X</button>
    </li>)
}