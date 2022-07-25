import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NavBar from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
    </div>
  );
}

export default App;
