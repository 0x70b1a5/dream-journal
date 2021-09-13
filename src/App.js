import moment from 'moment';
import { useState, useEffect } from 'react'
import './App.css';
import DreamsList from './components/DreamsList';
import Header from './components/Header';
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

  const toggleAddDream = () => {
    setShowAdd(!showAdd)
  }
  
  const addDream = (dream) => {
    const newDream = { ...dream, id: Math.floor(Math.random() * 100000) + 1 }
    // console.log(newDream)
    setDreams([ ...dreams, newDream])
  }

  const onEdit = (id) => {
    console.log('edit', id);
  }

  const onDelete = (id) => {
    if (window.confirm('Really delete dream #'+id+'?')) {
      setDreams(dreams.filter(dream => dream.id !== id));
    }
  }

  return (
    <div className="container">
      <Header toggleAddDream={toggleAddDream} showAdd={showAdd} />
      {showAdd && <AddDream onAdd={addDream}  />}
      <DreamsList dreams={dreams} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
