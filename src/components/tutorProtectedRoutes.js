import React, { useEffect, useState} from 'react';
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';
import jsonwebtoken from 'jsonwebtoken';

const TutorPrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    let token = localStorage.getItem('token')

        if(token){
            let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();
            try{
                var decoded = jsonwebtoken.verify(token, 'secret123')
                console.log(decoded)
              }
            catch(err){
                setIsAuthenticated(false)
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }            
            console.log(jwtDecode(token).user_type)
            console.log(jwtDecode(token).user_id)

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }
            else if(jwtDecode(token).user_type !== 'tutor'){
                setIsAuthenticated(false)
            }
            else{
                setIsAuthenticated(true)
            }
        } else {
           setIsAuthenticated(false)
        }
  }, [])

  if(isAuthenticated === null){
    return <></>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

    return children;
    
  
};

export default TutorPrivateRoute;