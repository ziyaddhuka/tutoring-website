import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import CardsLayout from './components/CardsLayout';
import JumbotronBanner from './components/JumbotronBanner';
import TutorsFilter from './components/TutorsFilter';
// import SearchAndFilter from './components/SearchAndFilters';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import AboutTutor from './components/AboutTutor';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutTutor" element={<AboutTutor />}/>


          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
