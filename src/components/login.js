import React, {useState} from 'react'
import validator from 'validator'


function Login() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [loginType, setLoginType] = useRadioButtons("student")
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateEmail = (e) => {
        if (validator.isEmail(email)) {
          setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        }
      }

    const validatePassowrd = (e) => {
        if (!password){
            setPasswordError("Please enter a password")
        }
        else{
            setPasswordError('')
        }
    }

    
	async function loginUser(event) {
		event.preventDefault()

        if(!email || !password){
            validateEmail(event)
            validatePassowrd(event)
        }
        else{
            let api;
            if (loginType === "student"){
                api = 'http://localhost:3000/loginstudent'
            }
            else {
                api = 'http://localhost:3000/logintutor'
            }
            console.log(api)
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (data.user) {
                localStorage.setItem('token', data.user)
                alert('Login successful')
                window.location.href = '/'
            } else {
                alert('Please check your username and password')
            }
        }
        
	}

  return (
  <div>
    <div class="text-center">
        <button className = "btn btn-warning btn-lg mx-4 my-4" onClick={(e) => window.location.href = '/studentRegistration'} >Register as Student</button>
        <button className = "btn btn-warning btn-lg mx-4 my-4" onClick={(e) => window.location.href = '/tutorRegistration'}>Register as Tutor</button>
        <h3>Login</h3>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="email" name="username" value = {email} onChange={e => setEmail(e.target.value)} placeholder="User name" onBlur={e => validateEmail(e.target.value)} class="form-control" />
                <span style={{fontWeight: 'bold',}}>{emailError}</span>
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="password" id="First name" name="password" value = {password} onChange={e => setPassword(e.target.value)} onBlur={e => validatePassowrd(e.target.value)} placeholder="Password" class="form-control" />
                <span style={{fontWeight: 'bold',}}>{passwordError}</span>
            </div>
        </div>
        <div>
          Student &nbsp;
          <input value="student" checked={loginType === "student"} {...setLoginType}/> &nbsp; &nbsp; &nbsp; &nbsp;
          Tutor &nbsp;
          <input value="tutor" checked={loginType === "tutor"} {...setLoginType} />
        </div>
        <br />
        <a href="#">Forgot your password?</a>
        <br/>
        <button className = "btn btn-primary mx-4 my-4" onClick={loginUser}>Sign In</button>
    </div>
  </div>
  );
}

function useRadioButtons(name) {
    const [value, setState] = useState(name);
  
    const handleChange = e => {
      setState(e.target.value);
    };
  
    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange
    };
  
    return [value, inputProps];
  }

export default Login;