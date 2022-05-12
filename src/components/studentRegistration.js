import React, {useState} from 'react';
import validator from 'validator';
function StudentRegistration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('Password should contain atleast 6 characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)')



    const validateEmail = (e) => {
        if (validator.isEmail(email)) {
          setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        }
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
        }

      }


    async function registerStudent(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/registerstudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                firstname,
                lastname,
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
    return (
    <div>
      <div class="text-center">
          <div className = "btn btn-warning btn-lg mx-4 my-4">Student Login</div>
          <h3>Registration</h3>
          <div class="row d-flex justify-content-center my-4">
              <div class="form-group col-md-4">
                  <input type="text" id="Email" name="username" value = {email} onChange={e => setEmail(e.target.value)} placeholder="User name" onBlur={e => validateEmail(e.target.value)} class="form-control" />
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

          <button className = "btn btn-primary mx-4 my-4" onClick={registerStudent}>Sign up</button>
      </div>
    </div>
    );
  }
  
  export default StudentRegistration;