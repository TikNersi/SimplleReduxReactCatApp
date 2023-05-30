import './App.css';
import { NotFound } from './components/NotFound';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
