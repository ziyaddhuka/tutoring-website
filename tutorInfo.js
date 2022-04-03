import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import face from './../images/tutors/EleanorBash.jpg';

class tutorInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="tutor-info">
      <div class="row mt-3 mb-3">
        <div class="col-sm-4 text-center">
          <img class="img-fluid rounded-circle" src={face}/>
          <h1>{this.props.name}</h1>
          <button class = "btn btn-warning mt-2 mb-2">Add to Favorites</button>
          <button class = "btn btn-success mt-2 mb-2">Schedule Meet</button>
        </div>
        <div class="col-sm-4">
        <h2 class="text-center">About Me</h2>
        <p class="text-secondary">Hi, my name is Eleanor! I have been living in Vietnam for a few years and also teaching English as well. I have many hobbies and interests so w..</p>
        <h2 class="text-center">Tutoring Style</h2>
        <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-sm-4">
        <h2 class ="text-center">Education</h2>
          <ul class="text-secondary" type="circle">
            <li>University of Texas Dallas, Masters in Computer Science</li>
            <li>Education 2</li>
            <li>Education 3</li>
          </ul>
          <h2 class="text-center">Schedule</h2>
          <ul class="text-secondary" type="circle">
            <li>Monday: 11am - 2pm</li>
            <li>Tuesday, Wednesday, and Thursday: 1pm - 5pm</li>
            <li>Friday: 5pm - 8pm</li>
          </ul>
          <h2 class="text-center">Courses</h2>
          <ul class="text-secondary" type="circle">
            <li>Computer Science</li>
            <li>Math</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
        );
    }
}

export default tutorInfo;