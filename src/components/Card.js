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
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
      <div className="oneline-card-button">
        <button className = "btn btn-default" id = "about-me-button" onClick={()=>{ navigate('/aboutTutor', {state: props});}}>About Me</button>
        <button className = "btn btn-success" id = "call-me-button">Schedule Meet</button>
      </div>
    </div>
  </div>
  );
}
 
export default Card;