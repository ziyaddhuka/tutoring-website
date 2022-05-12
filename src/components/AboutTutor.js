import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useLocation, useNavigate} from 'react-router-dom';


function AboutTutor(props){
        const { state } = useLocation();
        let navigate = useNavigate();
        const [ratingsData, setRatingsData] = useState([]);
        const [error, setError] = useState(null);
        //console.log(state);

        useEffect( () => {
            fetch('http://localhost:3000/ratings' , {
              headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
              }
            })
            .then(res => res.json())
            .then((data) => {
              setRatingsData(data);
            })
            .catch((error) => {
              console.log(error.message);
              setError(error);
            })
        }, []);
        console.log(ratingsData);
        const dat = ratingsData.filter((val)=>{
            if(val.tutor_id == state.tutor_id){
                return val;
            }
        });
    
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
                        {dat.map((eachRating)=>
                        <div>
                            <h5>Review by {eachRating.student_name}</h5>
                            <h6>{eachRating.rating} Stars</h6>
                            <p>{eachRating.feedback}</p>
                            <hr/>
                        </div>
                        )}
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
