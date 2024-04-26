import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom'
import Home from './components/Home';
import Features from './components/Features';
import DownloadApp from './components/DownloadApp';
import TopResturants from './components/TopResturants';
import TopDishes from './components/TopDishes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <DownloadApp />
      <TopResturants />
      <TopDishes/>
    </div>
  );
}

export default App;
