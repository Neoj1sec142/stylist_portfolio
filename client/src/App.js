import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './containers/Main'
import Dashboard from './containers/Dashboard';
import DetailPage from './containers/DetailPage'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/portfolio' element={<Dashboard />} />
        <Route path='/portfolio/:id' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
