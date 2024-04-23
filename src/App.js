import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;