import React, {useState} from 'react';

function TutorRegistration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [languages, setLanguages] = useState('');
    const [coursestaught, setCoursestaught] = useState('');
    const [availability, setAvailability] = useState('');
    const [aboutme, setAboutme] = useState('');

    function handleSubmit(e){

        const languagesArray = languages.split(",");
        const coursesTaughtArray = coursestaught.split(",");

        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:username, password:password, aboutMe: aboutme, firstname: firstname, 
                lastname: lastname, languagesSpoken: languagesArray, averageRating:0, hoursCompleted:0, coursesTaught: coursesTaughtArray
                 })
        };
        fetch('http://localhost:3000/tutors', requestOptions)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else {
                setAboutme('');
                setFirstname('');
                setUsername('');
                setPassword('');
                setLanguages('');
                setLastname('');
                setCoursestaught('');
                setAvailability('');
            };
          })
    }

    return (
    <div>
      <div class="text-center">
          <div className = "btn btn-warning btn-lg mx-4 my-4">Tutor</div>
          <h3>Registration</h3>
          <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="username" name="username" value = {username} onChange={e => setUsername(e.target.value)} placeholder="User name" class="form-control" />
              </div>
          </div>
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
          <button className = "btn btn-primary mx-4 my-4" onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
    );
  }
  
  export default TutorRegistration;