import './styles/App.css';
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
