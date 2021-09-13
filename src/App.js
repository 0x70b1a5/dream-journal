import moment from 'moment';
import { useState, useEffect } from 'react'
import './App.css';
import DreamsList from './components/DreamsList';
import Header from './components/Header';
import AddDream from './components/AddDream';

function App() {
  const [dreams, setDreams] = useState([
    {
      name: 'Dream 1',
      text: 'some stuff happened.',
      date: moment().format('YYYY MM DD'),
      id: 1,
    },
    {
      name: 'Dream 2',
      text: 'some more stuff happened.',
      date: moment().format('YYYY MM DD'),
      id:  2,
    },
    {
      name: 'Dream 3',
      text: 'some other stuff happened.',
      date: moment().format('YYYY MM DD'),
      id : 3,
    },
  ]);

  const toggleAddDream = () => {

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
      <Header toggleAddDream={toggleAddDream} />
      <AddDream onAdd={addDream} />
      <DreamsList dreams={dreams} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
