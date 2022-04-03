import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './card.css';

function Card(props) {
    return (
    <div class="card">
      <img src={props.img_src} class="card-img-top" alt={props.name}/>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <div class="oneline-card-button">
          <button class = "btn btn-default" id = "about-me-button">About Me</button>
          <button class = "btn btn-success" id = "call-me-button">Schedule Meet</button>
        </div>
      </div>
    </div>
    );
}
 
export default Card;