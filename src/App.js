import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import DreamsList from './components/DreamsList'
import Dream from './components/Dream'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import WordCloud from './components/WordCloud'
import About from './components/About'
import AddDream from './components/AddDream'

function App() {
  const [dreams, setDreams] = useState([])
  
  useEffect(() => {
    const getDreams = async () => {
      const dreamsFromServer = await fetchDreams()
      setDreams(dreamsFromServer)
    }
    
    getDreams()
  }, [])
  
  const fetchDreams = async () => {
    const res = await fetch('http://localhost:5000/dreams')
    const data = await res.json()
    
    return data
  } 
  
   
  
  const addDream = async (dream) => {
    const newDream = { ...dream, id: Math.floor(Math.random() * 100000) + 1 }
    // console.log(newDream)
    
    const res = await fetch(`http://localhost:5000/dreams`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newDream)
    })
    
    const data = await res.json()
    setDreams([ ...dreams, data])

  }

  const onEdit = (id) => {
    console.log('edit', id)
  }

  const deleteDream = async (id) => {
    await fetch(`http://localhost:5000/dreams/${id}`, {
    method: 'DELETE',
  })

  setDreams(dreams.filter(dream => dream.id !== id));
  }

  const onDelete = (id) => {
    if (window.confirm('Really delete dream #'+id+'?')) {
      deleteDream(id)
    }
  }

  return (
    <Router>
      <div className='app-container'>
        <Sidebar />
        <div className='container'>
          <Header  />
          <Route path='/' exact render={(props) => (
                <DreamsList dreams={dreams} onEdit={onEdit} onDelete={onDelete} />
              )} 
          />
          <Route path='/about' component={About} />
          <Route path='/dream/:id' component={Dream} />
          <Route path='/word-cloud' component={WordCloud} />
          <Route path='/add'>
            <AddDream onAdd={addDream} />
          </Route>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}
  
export default App
