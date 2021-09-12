import moment from 'moment';
import './App.css';
import DreamsList from './components/DreamsList';

function App() {
  const dreams = [
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
  ];
  return (
    <div className="App">
      <DreamsList dreams={dreams} />
    </div>
  );
}

export default App;
