import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Review(props) {
    const navigate = useNavigate();
    const { state } = useLocation();
    //console.log(state);
    const [tutorname, setTutorname] = useState('');
    const [studentname, setStudentname] = useState('');
    const [rating, setRating] = useState('');
    const [feedback, setFeedback] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tutor_name: state.name, student_name: studentname, 
                tutor_id: state.tutor_id,
                rating: rating, feedback: feedback })
        };
        fetch('http://localhost:3000/ratings', requestOptions)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else {
                setStudentname('');
                setRating('');
                setFeedback('');
                alert('Review Success');
                
                navigate("/");
                // <Popup trigger={<button> Trigger</button>} position="right center">
                //     <div>Popup content here !!</div>
                // </Popup>
            };
          })
    }


    return (
        <div>
            <div class="text-center">
                <h3 class="mt-4">Write a Review</h3>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Tutor Name</label>
                        <input type="text" id="tutorname-review" name="tutorname-review" value = {state.name} onChange={e => setTutorname(e.target.value)} placeholder="Tutor Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Your Name</label>
                        <input type="text" id="username-review" name="username-review" value = {studentname} onChange={e => setStudentname(e.target.value)} placeholder="Your Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-6">
                        <label>Rating</label>
                        <select class="form-select" value={rating} onChange={e => setRating(e.target.value)}>
                            <option selected>Rating</option>
                            <option value="1">One Star</option>
                            <option value="2">Two Stars</option>
                            <option value="3">Three Stars</option>
                            <option value="4">Four Stars</option>
                            <option value="5">Five Stars</option>
                        </select>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Review</label>
                        <textarea id="review" name="review" value = {feedback} onChange={e => setFeedback(e.target.value)} placeholder="Write your review" class="form-control"></textarea>
                    </div>
                </div>
                <button className = "btn btn-primary mx-4 my-4" onClick={handleSubmit}>Submit Review</button>
            </div>
        </div>
    );
  }
  
  export default Review;
