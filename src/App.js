import './App.css';
import Content from './views/Content';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import History from './views/History';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Content />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </>
  );
}

export default App;
