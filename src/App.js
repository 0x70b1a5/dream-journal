import moment from 'moment';
import { useState, useEffect } from 'react'
import './App.css';
import DreamsList from './components/DreamsList';
import Header from './components/Header';

function App() {
  const [dreams, setDreams] = useState([
    {
      title: 'Dream 1',
      text: 'some stuff happened.',
      date: moment(),
      id: 1,
    },
    {
      title: 'Dream 2',
      text: 'some more stuff happened.',
      date: moment(),
      id:  2,
    },
    {
      title: 'Dream 3',
      text: 'some other stuff happened.',
      date: moment(),
      id : 3,
    },
  ]);

  
  const addDream = () => {
    console.log('dreamin');
  }

  const onEdit = (id) => {
    console.log('edit', id);
  }

  const onDelete = (id) => {
    setDreams(dreams.filter(dream => dream.id !== id));
  }

  return (
    <div className="App">
      <Header addDream={addDream} />
      <DreamsList dreams={dreams} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
