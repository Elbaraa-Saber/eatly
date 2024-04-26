import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom'
import Home from './components/Home';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>

    </div>
  );
}

export default App;
