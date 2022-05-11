import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './card.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  let navigate = useNavigate();
  
  return (
  <div className="card">
    <img src={props.img_src} className="card-img-top" alt={props.name}/>
    <div className="card-body">

      <div class="container">
        <div class="row">
          <div class="col-10">
            <h5 className="card-title">{props.name}</h5>
          </div>
          <div class="col">
          <a href="#"><i class="bi bi-star"></i></a>
            {/* <label for="id-of-input" class="custom-checkbox">
              <input type="checkbox" id="id-of-input"/>
              <i class="bi bi-star"></i>
              <i class="bi bi-star-fill"></i>
              <span>Favorite</span>
            </label> */}
          </div>
        </div>
      </div>

      <p className="card-text">{props.description}</p>
      <div className="oneline-card-button">
        <button className = "btn btn-warning" id = "about-me-button" onClick={()=>{ navigate('/aboutTutor', {state: props});}}>About Me</button>
        <button className = "btn btn-success" id = "call-me-button" onClick={()=>{ navigate('/schedule', {state: props});}}>Schedule Meet</button>
      </div>
    </div>
  </div>
  );
}
 
export default Card;