import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

import { Route, Routes } from 'react-router-dom';
import Page from './pages/Page';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
