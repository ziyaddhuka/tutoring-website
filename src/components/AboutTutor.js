import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useLocation, useNavigate } from 'react-router-dom';


function AboutTutor(props){
        const { state } = useLocation();
        let navigate = useNavigate();
        console.log(state);
    
        return(
            <div id="tutor-info">
                <div className="row mt-3 mb-3">
                    <div className="col-sm-4 text-center">
                        <img className="img-fluid rounded-circle" src={state.img_src}/>
                        <h1>{state.name}</h1>
                        <button className = "btn btn-warning my-2 mx-2" id="add-to-faves-button">Add to Favorites</button>
                        <button className = "btn btn-success my-2 mx-2" id="sched-meet-button" onClick={()=>{ navigate('/schedule', {state: state});}}>Schedule Meet</button>
                        <button className = "btn btn-secondary my-2 mx-2" id="write-review-button" onClick={()=>{ navigate('/writeReview', {state: state});}}>Write Review</button>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="text-center">About Me</h2>
                        <p className="text-secondary">{state.description}</p>
                        <h2 className="text-center">Reviews</h2>
                        <h5>Great Tutor!<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
                        <p>Such a great tutor! So nice and explains things well!</p>
                        <hr></hr>
                        <h5>Review 2<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
                        <p>Review 2</p>
                        <hr></hr>
                        <h5>Review 3<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></h5>
                        <p>Review 3</p>
                    </div>
                    <div className="col-sm-4">
                        <h2 className ="text-center">Languages Spoken</h2>
                        <ul className="text-secondary" type="circle">
                            {state.languagesSpoken.map((eachLang) => <li>{eachLang}</li>)}
                        </ul>
                        <h2 className="text-center">Schedule</h2>
                        <ul className="text-secondary" type="circle">
                            {state.workingHours.map((eachHour) => <li>{eachHour}</li>)}
                        </ul>
                        <h2 className="text-center">Courses</h2>
                        <ul className="text-secondary" type="circle">
                            {state.coursesTaught.map((eachCourse) => <li>{eachCourse}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

export default AboutTutor;
