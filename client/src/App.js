import Main from './containers/Main'
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SkillDash from './containers/SkillDash';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/skills' element={<SkillDash />} />
      </Routes>
    </div>
  );
}

export default App;
