import React from 'react';
import { useLocation } from 'react-router-dom';

function Schedule(props) {
    const { state } = useLocation();
    console.log(state);

    return (
        <div>
            <div class="text-center">
                <h3 class="mt-4">Schedule a Meeting</h3>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Tutor Name</label>
                        <input type="text" id="tutorname-schedule" name="tutorname-schedule" value = {state.name} placeholder="Tutor Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Your Name</label>
                        <input type="text" id="username-schedule" name="username-schedule" placeholder="Your Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-6">
                        <label>Course</label>
                        <select class="form-select">
                            <option selected>Course</option>
                            {state.coursesTaught.map((eachCourse) => <option value={eachCourse}>{eachCourse}</option>)}
                        </select>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Date</label>
                        <input type="date" id="date-schedule" name="date-schedule" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Time</label>
                        <input type="time" id="time-schedule" name="time-schedule" class="form-control" />
                    </div>
                </div>
                <button className = "btn btn-primary mx-4 my-4">Schedule</button>
            </div>
        </div>
    );
  }
  
  export default Schedule;