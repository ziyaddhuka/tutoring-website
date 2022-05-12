import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Navigate, useNavigate } from "react-router-dom";

function AccountSettings(props) {
  const navigate = useNavigate();
  // console.log(props.authedUser);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect( () => {
    fetch(`http://localhost:3000/tutors/${props.authedUser}`, {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      setUserData(data[0]);
    })
    .catch((error) => {
      console.log(error.message);
      setError(error);
    })
}, []);

  const Info = userData;

  const [username, setUsername] = useState(Info.username);
  useEffect(() => { setUsername(Info.username)}, [Info.username]);
  const [password, setPassword] = useState('');
  useEffect(() => { setPassword(Info.password)}, [Info.password]);
  const [firstname, setFirstname] = useState('');
  useEffect(() => { setFirstname(Info.firstname)}, [Info.firstname]);
  const [lastname, setLastname] = useState('');
  useEffect(() => { setLastname(Info.lastname)}, [Info.lastname]);
  const [languages, setLanguages] = useState('');
  useEffect(() => { setLanguages(Info.languagesSpoken)}, [Info.languagesSpoken]);
  const [coursestaught, setCoursestaught] = useState('');
  useEffect(() => { setCoursestaught(Info.coursesTaught)}, [Info.coursesTaught]);
  const [availability, setAvailability] = useState('');
  useEffect(() => { setAvailability(Info.workingHours)}, [Info.workingHours]);
  const [aboutme, setAboutme] = useState('');
  useEffect(() => { setAboutme(Info.aboutMe)}, [Info.aboutMe]);

  // setUsername(tt);

  function handleSubmit(id){
      console.log("In Handle submit");
      console.log(id);
      console.log(languages);
      const languagesArray = languages.toString().split(",");
      const coursesTaughtArray = coursestaught.toString().split(",");
      // e.preventDefault();
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username:username, password:password, aboutMe: aboutme, firstname: firstname, 
              lastname: lastname, languagesSpoken: languagesArray, averageRating:0, hoursCompleted:0, coursesTaught: coursesTaughtArray
               })
      };
      fetch(`http://localhost:3000/tutors/${id}`, requestOptions)
      .then((response) => {
          if(!response.ok) throw new Error(response.status);
          else {
              navigate('/accountSettings');

          };
        })
  }

  return (
  <div>
    <div class="text-center">
        <div className = "btn btn-warning btn-lg mx-4 my-4">{username}</div>
        <h3>Account</h3>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="password" id="First name" name="password" value = {password} onChange={e => setPassword(e.target.value)} placeholder="Password" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="First name" name="First name" value = {firstname} onChange={e => setFirstname(e.target.value)} placeholder="First name" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="Last name" name="Last name" value = {lastname} onChange={e => setLastname(e.target.value)} placeholder="Last name" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="Languages" name="Languages" value = {languages} onChange={e => setLanguages(e.target.value)} placeholder="Languages" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="Courses Taught" name="Courses Taught" value = {coursestaught} onChange={e => setCoursestaught(e.target.value)} placeholder="Courses Taught" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="date" id="Availability" name="Availability" value = {availability} onChange={e => setAvailability(e.target.value)} placeholder="Availability" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="About me" name="About me" value = {aboutme} onChange={e => setAboutme(e.target.value)} placeholder="About me" class="form-control" />
            </div>
        </div>
        <button className = "btn btn-primary mx-4 my-4" onClick={e => handleSubmit(Info._id)}>Save</button>
    </div>
  </div>
  );
}



export default AccountSettings;