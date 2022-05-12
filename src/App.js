import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import CardsLayout from './components/CardsLayout';
import JumbotronBanner from './components/JumbotronBanner';
import TutorsFilter from './components/TutorsFilter';
// import SearchAndFilter from './components/SearchAndFilters';
import Home from './components/Home';
import Login from './components/login';
import Review from './components/review';
import Appointments from './components/appointments';
import ErrorPage from './components/ErrorPage';
import AboutTutor from './components/AboutTutor';
import Schedule from './components/schedule';
import TutorRegistration from './components/tutorRegistration';
import StudentRegistration from './components/studentRegistration';
import AccountSettings from './components/accountSettings';
import Favorites from './components/favorites';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const operator_id='627c139f534e2117ac7681b9';
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutTutor" element={<AboutTutor />}/>
          <Route path="/writeReview" element={<Review />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/tutorRegistration" element={<TutorRegistration />}/>
          <Route path="/studentRegistration" element={<StudentRegistration />}/>
          <Route path="/appointments" element={<Appointments authedUser={operator_id}/>}/>
          <Route path="/schedule" element={<Schedule authedUser={operator_id}/>}/>
          <Route path="/favorites" element={<Favorites authedUser={operator_id}/>}/>
          <Route path="/accountSettings" element={<AccountSettings  authedUser={operator_id} />}/>

          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
