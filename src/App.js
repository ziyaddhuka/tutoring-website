import React, { useEffect, useState} from 'react';
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

import StudentPrivateRoute from './components/studentProtectedRoutes'
import jwtDecode from 'jwt-decode';
import jsonwebtoken from 'jsonwebtoken';
// import store from './components/store';
// import Favorites from './components/favorites';

import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  let operator_id;
  let token = localStorage.getItem('token')
  if(token){
    try{
      var decoded = jsonwebtoken.verify(token, 'secret123')
      console.log(decoded)
    }
    catch(err){
      alert('Token is corrupted logging out...')
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    operator_id = jwtDecode(token).user_id        
  }
  console.log(operator_id)

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" exact  element={<StudentPrivateRoute> {<Home/>} </StudentPrivateRoute>}>
          </Route>
          <Route path="/aboutTutor" element={<AboutTutor />}/>
          <Route path="/writeReview" element={<Review />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/tutorRegistration" element={<TutorRegistration />}/>
          <Route path="/studentRegistration" element={<StudentRegistration />}/>
          <Route path="/appointments" element={<Appointments authedUser={operator_id}/>}/>
          <Route path="/schedule" element={<Schedule authedUser={operator_id}/>}/>
          {/* <Route path="/favorites" element={<Favorites authedUser={operator_id}/>}/> */}
          <Route path="/accountSettings" element={<AccountSettings  authedUser={operator_id} />}/>

          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
