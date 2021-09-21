import {useState, useEffect} from 'react'
import {  useParams } from 'react-router'
 
function Dream() {
    const { id } = useParams()
    const defaultDream = { id: 0, text: 'Loading Dream...' }
    const [dream, setDream] = useState(defaultDream)
    
    const fetchDream = async (dreamId) => {
        const res = await fetch(`http://localhost:5000/dreams/${dreamId}`)
        const data = await res.json()
        
        return data
    } 

    useEffect(() => {
        const getDream = async () => {
            const dreamFromServer = await fetchDream(id)
            // console.log(dreamFromServer)
            setDream(dreamFromServer)
        }
        
        getDream()
    }, [id])
    
    
    return (
        <div className='dream'>
            <h2>{dream.name}</h2>
            {dream.text}
        </div>
    )
}
    
export default Dream
