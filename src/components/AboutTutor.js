import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useLocation } from 'react-router-dom';


function AboutTutor(props){
        const { state } = useLocation();
        console.log(state);
    
        return(
            <div id="tutor-info">
                <div className="row mt-3 mb-3">
                    <div className="col-sm-4 text-center">
                        <img className="img-fluid rounded-circle" src={state.img_src}/>
                        <h1>{state.name}</h1>
                        <button className = "btn btn-warning mt-2 mb-2">Add to Favorites</button>
                        <button className = "btn btn-success mt-2 mb-2">Schedule Meet</button>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="text-center">About Me</h2>
                        <p className="text-secondary">{state.description}</p>
                        <h2 className="text-center">Tutoring Style</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-sm-4">
                        <h2 className ="text-center">Education</h2>
                        <ul className="text-secondary" type="circle">
                            <li>University of Texas Dallas, Masters in Computer Science</li>
                            <li>Education 2</li>
                            <li>Education 3</li>
                        </ul>
                        <h2 className="text-center">Schedule</h2>
                        <ul className="text-secondary" type="circle">
                            <li>Monday: 11am - 2pm</li>
                            <li>Tuesday, Wednesday, and Thursday: 1pm - 5pm</li>
                            <li>Friday: 5pm - 8pm</li>
                        </ul>
                        <h2 className="text-center">Courses</h2>
                        <ul className="text-secondary" type="circle">
                            <li>Computer Science</li>
                            <li>Math</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

export default AboutTutor;
