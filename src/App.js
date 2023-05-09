import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import {Home, About, Services, Skills, Contatct, Portfolio} from './pages/router';


function App() {
  return (
    <Router>
        <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contatct />} />
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;
