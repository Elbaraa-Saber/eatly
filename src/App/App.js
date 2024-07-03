// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

import { Route, Routes } from 'react-router-dom';
import Page from '../Pages/MainPage/ui';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';


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
