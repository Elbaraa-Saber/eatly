// import logo from './logo.svg';
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
        <Route path='/eatly/' element={<Page/>}/>
        <Route path='/eatly/signup' element={<SignUp/>}/>
        <Route path='eatly/signin' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
