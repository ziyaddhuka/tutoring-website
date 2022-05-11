import React from 'react';
import { useLocation } from 'react-router-dom';

function Review(props) {
    const { state } = useLocation();
    console.log(state);

    return (
        <div>
            <div class="text-center">
                <h3 class="mt-4">Write a Review</h3>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Tutor Name</label>
                        <input type="text" id="tutorname-review" name="tutorname-review" value = {state.name} placeholder="Tutor Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="form-group col-md-6">
                        <label>Your Name</label>
                        <input type="text" id="username-review" name="username-review" placeholder="Your Name" class="form-control" />
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-6">
                        <label>Rating</label>
                        <select class="form-select">
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
                        <textarea id="review" name="review" placeholder="Write your review" class="form-control"></textarea>
                    </div>
                </div>
                <button className = "btn btn-primary mx-4 my-4">Submit Review</button>
            </div>
        </div>
    );
  }
  
  export default Review;