import {useState} from 'react'
import {api} from '../service/api'

export default function TaksItem({id,title,done,fetchTasks}:{id:number,title:string,done:boolean,fetchTasks:()=>void}){


    function handleDeleteClick(){
        api.delete(`/api/tasks/${id}`)
        .then(()=>fetchTasks())
    }

    return(<li>
        <span>{title}</span>
        <button onClick={handleDeleteClick}>X</button>
    </li>)
}