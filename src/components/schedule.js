import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
// import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom";

function Schedule(props) {

    const Info = props.authedUser;
    const [apptsData, setApptsData] = useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { state } = useLocation();
    const [tutorname, setTutorname] = useState('');
    const [studentname, setStudentname] = useState('');
    const [coursename, setCoursename] = useState('');
    const [appt_date, setAppt_date] = useState('');
    const [appt_time, setAppt_time] = useState('');

    useEffect( () => {
        fetch('http://localhost:3000/tutors', {
          headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
          }
        })
        .then(res => res.json())
        .then((data) => {
          setApptsData(data);
          
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
        })

    }, []);


    function handleSubmit(e){
        e.preventDefault();
        const dat = apptsData
        .filter((val)=> {
        if(val._id === Info){
            const obj = val.workingHours
            var size = Object.keys(obj).length;
            // var availableAny = new Boolean(false);
            for (let i = 0; i < size; i++) {
                var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];               
                var today = new Date(appt_date);
                var day = days[today.getDay()];

                if(obj[i].Date == day){
                    // availableAny = true;
                    // alert('Date matches')
                    // console.log('appt --> ', appt_time);
                    // console.log('start time__> ',obj[i].StartTime);
                    // console.log('end time__ ',obj[i].EndTime);
                    if(obj[i].StartTime > appt_time || obj[i].EndTime < appt_time ){
                        alert('Appt exists - choose a different time');
                    }else{
                        bookAppointment();
                    }
                }
            }
        }
        })
}


    function bookAppointment(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tutor_name: state.name, student_name: studentname, 
                tutor_id: state.tutor_id,
                course_name: coursename, date: appt_date, time: appt_time })
        };
        fetch('http://localhost:3000/api/appts', requestOptions)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else {
                setStudentname('');
                setCoursename('');
                setAppt_date('');
                setAppt_time('');
                alert('Appointment Success');
                
                navigate("/");
            };
          })
    }
    return (
        <div>
            <div class="text-center">
                <h3 class="mt-4">Schedule a Meeting</h3>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Tutor Name</label>
                        <input type="text" id="tutorname-schedule" name="tutorname-schedule" value = {state.name} onChange={e => setTutorname(e.target.value)} placeholder="Tutor Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Your Name</label>
                        <input type="text" id="username-schedule" name="username-schedule" value={studentname} onChange={e => setStudentname(e.target.value)} placeholder="Your Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-6">
                        <label>Course</label>
                        <select class="form-select" value={coursename} onChange={e => setCoursename(e.target.value)}>
                            <option selected>Course</option>
                            {state.coursesTaught.map((eachCourse) => <option value={eachCourse}>{eachCourse}</option>)}
                        </select>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Date</label>
                        <input type="date" id="date-schedule" name="date-schedule" value={appt_date} onChange={e => setAppt_date(e.target.value)} class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Time</label>
                        <input type="time" id="time-schedule" name="time-schedule" value={appt_time} onChange={e => setAppt_time(e.target.value)} class="form-control" />
                    </div>
                </div>
                <button className = "btn btn-primary mx-4 my-4" onClick={handleSubmit} >Schedule</button>
            </div>
        </div>
    );
  }
  
  export default Schedule;
