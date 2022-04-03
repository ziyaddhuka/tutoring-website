import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './jumbotronBanner.css';

function JumbotronBanner(props) {
    return (
    <div className="bg-image">
        <div className="jumbotron jumbotron-fluid" id = "intro-jumbotron">
            <div className="jumbotron-container"></div>
            <h1 className="display-4">Welcome to Best-Tutors!</h1>
            <p className="lead">Learn English from the best tutors around the world.</p>
        </div>
    </div>   
    );
}
 
export default JumbotronBanner;