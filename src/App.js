import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';


import {Home, About} from './pages/router';

function App() {
  return (
    <Router>
        <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;
