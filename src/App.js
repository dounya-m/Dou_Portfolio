import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/router';
import Layout from './layout/Layout';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout>{<Home />}</Layout>} />
      </Routes> 
    </Router>
  );
}

export default App;
