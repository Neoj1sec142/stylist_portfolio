import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './containers/Main'
import Dashboard from './containers/Dashboard';
import DetailPage from './containers/DetailPage'
import Contact from './containers/Contact'
import './styles/App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/portfolio' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio/:id' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
