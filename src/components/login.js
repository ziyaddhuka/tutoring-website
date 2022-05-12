import React, {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/login', {
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

  return (
  <div>
    <div class="text-center">
        <button className = "btn btn-warning btn-lg mx-4 my-4">Register as Student</button>
        <button className = "btn btn-warning btn-lg mx-4 my-4">Register as Tutor</button>
        <h3>Login</h3>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address or Username" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" name="password" placeholder="Password" class="form-control" />
            </div>
        </div>
        <a href="#">Forgot your password?</a>
        <br/>
        <button className = "btn btn-primary mx-4 my-4" onClick={loginUser}>Sign In</button>
    </div>
  </div>
  );
}

export default Login;