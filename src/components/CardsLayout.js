import React, {useState, useEffect} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cardsLayout.css';
//import tutorsData from '../tutors'

function CardsLayout(props) {
    const [tutorsData, setTutorsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:3000/tutors', {
          headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
          }
        })
        .then(res => res.json())
        .then((data) => {
          setTutorsData(data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
        })
      }, []);
    
    const searchTerm = props.dataFromParent;
    const dat = tutorsData
    .filter((val)=> {
        if(searchTerm == ""){
            return val;
        }else if(val.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || val.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        //search tutor by course
        }for (let i = 0; i < val.coursesTaught.length; i++){
            if(val.coursesTaught[i].toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }
      })
    
    .map((each_data)=>{
            return <Card tutor_id={each_data._id} img_src={each_data.image} name={each_data.firstname + " " + each_data.lastname} description={each_data.aboutMe} languagesSpoken={each_data.languagesSpoken} coursesTaught={each_data.coursesTaught} workingHours={each_data.workingHours}/>
        }
    );
    return (
        <div>
            <div class="container cards-container">
                <div class="row row-cols-1 row-cols-md-4 g-2">
                    {dat}
                </div>
            </div>
    </div>
    );
}
 
export default CardsLayout;