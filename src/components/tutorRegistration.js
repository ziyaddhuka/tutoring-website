import React, {useState} from 'react';
import validator from 'validator'

function TutorRegistration() {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [languages, setLanguages] = useState('');
    const [coursestaught, setCoursestaught] = useState('');
    const [availability, setAvailability] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('Password should contain atleast 6 characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)')
    // function handleSubmit(e){

    //     const languagesArray = languages.split(",");
    //     const coursesTaughtArray = coursestaught.split(",");

    // const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const validateEmail = (e) => {
        if (validator.isEmail(email)) {
          setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        return false
        }
        return true
      }

    
    const validatePassowrd = (e) => {
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%^&*+])[0-9a-zA-Z!@#\$%^&*+]{6,}$/.test(password))) {
            if (password.length < 6){
                setPasswordError('Error Password should be atleast 6 characters')
            }
            else if (!(/(?=.*[!@#\$%^&*+])/.test(password))){
                setPasswordError('Error Password should be contain atleast one special character (!,@,#,$,%,^,&,*,+)')
            }
            else if (!(/(?=.*[A-Z])/.test(password))){
                setPasswordError('Error Password should be contain atleast one Uppercase character')
            }
            else if (!(/(?=.*[a-z])/.test(password))){
                setPasswordError('Error Password should be contain atleast one Lowercase character')
            }
            else if (!(/(?=.*[\d])/.test(password))){
                setPasswordError('Error Password should be contain atleast one number')
            }
        }
        else{
            setPasswordError('')
            return true
        }
        return false
      }


    async function registerTutor(e) {
        e.preventDefault()
        if(validatePassowrd(e) && validateEmail(e)){
            const response = await fetch('http://localhost:3000/registertutor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstname,
                    lastname,
                    aboutme,
                }),
            })
            const data = await response.json()
            if (data.status === 'ok') {
                alert('Registration successful')
                window.location.href = '/login'
            }
            else {
                alert('Registration failed')
            } 
        }
    }

    return (
    <div>
      <div class="text-center">
          <div className = "btn btn-warning btn-lg mx-4 my-4">Tutor Login</div>
          <h3>Registration</h3>
          <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="username" name="username" value = {email} onChange={e => setEmail(e.target.value)} onBlur={e => validateEmail(e.target.value)} placeholder="Email" class="form-control" />
                  <span style={{fontWeight: 'bold',}}>{emailError}</span>
              </div>
          </div>
          <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="password" id="First name" name="password" value = {password} onChange={e => setPassword(e.target.value)} onBlur={e => validatePassowrd(e.target.value)} placeholder="Password" class="form-control" />
                  <span style={{fontWeight: 'bold',}}>{passwordError}</span>
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
          {/* <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="Languages" name="Languages" value = {languages} onChange={e => setLanguages(e.target.value)} placeholder="Languages" class="form-control" />
              </div>
          </div> */}
          {/* <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="Courses Taught" name="Courses Taught" value = {coursestaught} onChange={e => setCoursestaught(e.target.value)} placeholder="Courses Taught" class="form-control" />
              </div>
          </div> */}
          {/* <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="date" id="Availability" name="Availability" value = {availability} onChange={e => setAvailability(e.target.value)} placeholder="Availability" class="form-control" />
              </div>
          </div> */}
          <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="About me" name="About me" value = {aboutme} onChange={e => setAboutme(e.target.value)} placeholder="About me" class="form-control" />
              </div>
          </div>
          <button className = "btn btn-primary mx-4 my-4" onClick={registerTutor}>Sign up</button>
      </div>
    </div>
    );
  }
  
  export default TutorRegistration;