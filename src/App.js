import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom'
import Home from './components/Home';
import Features from './components/Features';
import Download_app from './components/Download_app';
import TopResturants from './components/TopResturants';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <Download_app />
      <TopResturants />
    </div>
  );
}

export default App;
