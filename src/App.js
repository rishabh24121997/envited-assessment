import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Event from './components/event/event';
import Create from './components/create/create';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Home/> } exact path="/" />
          <Route element={ <Create/> } exact path="/create" />
          <Route element={ <Event/> } exact path="/create/event" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
