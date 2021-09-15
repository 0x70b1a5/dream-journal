import moment from 'moment';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import DreamsList from './components/DreamsList';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import AddDream from './components/AddDream';

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [dreams, setDreams] = useState([]);

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
  
  const fetchDream = async (id) => {
    const res = await fetch(`http://localhost:5000/dream/${id}`)
    const data = await res.json()

    return data
  } 

  const toggleShowAdd = () => {
    setShowAdd(!showAdd)
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
    console.log('edit', id);
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

      <div className="container">
        <Header toggleShowAdd={toggleShowAdd} showAdd={showAdd} />
        <Route path='/' exact render={(props) => (
          <>

            {showAdd && <AddDream onAdd={addDream}  />}
            <DreamsList dreams={dreams} onEdit={onEdit} onDelete={onDelete} />
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
