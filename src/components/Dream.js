import {useState, useEffect} from 'react'
import { useLocation, useParams } from 'react-router'
import React from 'react'
 
function Dream() {
    const { id } = useParams()
    const [dream, setDream] = useState({ id: 0, text: '' })
    
    const fetchDream = async (dreamId) => {
        const res = await fetch(`http://localhost:5000/dreams/${dreamId}`)
        const data = await res.json()
        
        return data
    } 

    useEffect(() => {
        const getDream = async () => {
            const dreamFromServer = await fetchDream(id)
            console.log(dreamFromServer)
            setDream(dreamFromServer)
        }
        
        getDream()
    }, [id])
    
    
    return (
        <div className='dream'>
            {dream.id && dream.text}
        </div>
    )
}
    
export default Dream
