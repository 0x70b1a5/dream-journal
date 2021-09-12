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
    },
    {
      title: 'Dream 2',
      text: 'some more stuff happened.',
      date: moment(),
    },
    {
      title: 'Dream 3',
      text: 'some other stuff happened.',
      date: moment(),
    },
  ]);

  return (
    <div className="App">
      <Header />
      <DreamsList dreams={dreams} />
    </div>
  );
}

export default App;
