import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './jumbotronBanner.css';

function JumbotronBanner(props) {
    return (
    <div class="bg-image">
        <div class="jumbotron jumbotron-fluid" id = "intro-jumbotron">
            <div class="jumbotron-container"></div>
            <h1 class="display-4">Welcome to Best-Tutors!</h1>
            <p class="lead">Learn English from the best tutors around the world.</p>
        </div>
    </div>   
    );
}
 
export default JumbotronBanner;