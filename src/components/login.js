import React from 'react'

function Login() {
  return (
  <div>
    <div class="text-center">
        <button className = "btn btn-warning btn-lg mx-4 my-4">Register as Student</button>
        <button className = "btn btn-warning btn-lg mx-4 my-4">Register as Tutor</button>
        <h3>Login</h3>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="text" id="username" name="username" placeholder="Email Address or Username" class="form-control" />
            </div>
        </div>
        <div class="row d-flex justify-content-center my-4">
            <div class="form-group col-md-4">
                <input type="password" id="password" name="password" placeholder="Password" class="form-control" />
            </div>
        </div>
        <a href="#">Forgot your password?</a>
        <br/>
        <button className = "btn btn-primary mx-4 my-4">Sign In</button>
    </div>
  </div>
  );
}

export default Login;