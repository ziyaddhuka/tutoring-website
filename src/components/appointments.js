import React, {useState, useEffect} from 'react';

function Appointments(){
    const [apptsData, setApptsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:3000/api/appts', {
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
    console.log(apptsData);

    const dat = apptsData
    .map((each_data)=>{
        return <div>
            <h4 class="mx-3 my-1">{each_data.date}</h4>
            <h5 class="mx-3 my-1">{each_data.time}</h5>
            <p class="mx-3 my-1"><b>Course:</b> {each_data.course_name}</p>
            <p class="mx-3 my-1"><b>Tutor:</b> {each_data.tutor_name}</p>
            <p class="mx-3 my-1"><b>Student:</b> {each_data.student_name}</p>
            <button className = "btn btn-warning mx-3 my-1" id="cancel-appt-button">Cancel</button>
            <button className = "btn btn-success mx-3 my-1" id="update-appt-button">Update</button>
            <hr/>
        </div>
    });

    return(
        <div>
            <h1 class="mx-3 my-4">Appointments</h1>
            {dat}
        </div>
    );
}

export default Appointments;