import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Languages from './components/Languages';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/all' element={<Languages/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
