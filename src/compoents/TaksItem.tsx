import {useState} from 'react'

export default function TaksItem({title,done}:{title:string,done:boolean}){


    function handleDeleteClick(){

    }

    return(<li>
        <span>{title}</span>
        <button onClick={handleDeleteClick}>X</button>
    </li>)
}