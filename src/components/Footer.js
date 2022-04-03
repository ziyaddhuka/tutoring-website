import React from 'react';
import './footer.css';
const Footer = (props) =>{
    //source: https://getbootstrap.com/docs/4.0/utilities/colors/
    //source: https://www.cambly.com/english?lang=en
    //source: https://mdbootstrap.com/docs/standard/navigation/footer/
    //source: https://getbootstrap.com/docs/4.0/utilities/spacing/
    //source: https://icons.getbootstrap.com
    //bg-warning = yellow background
	return (
      <footer>
        <div className="row bg-light">
          <div className="col-sm-4 mt-4 text-center">
            <h6>ABOUT</h6>
            <p><a href="#" className="text-secondary">Courses</a></p>
            <p><a href="#" className="text-secondary">Tutors</a></p>
            <p><a href="#" className="text-secondary">Pricing</a></p>
            <p><a href="#" className="text-secondary">Blogs</a></p>
            <p><a href="#" className="text-secondary">Careers</a></p>
          </div>
          <div className="col-sm-4 mt-4 text-center">
            <h6>JOIN</h6>
            <p><a href="#" className="text-secondary">As a Student</a></p>
            <p><a href="#" className="text-secondary">As a Tutor</a></p>
            <p><a href="#" className="text-secondary">As an Organization</a></p>
          </div>
          <div className="col-sm-4 mt-4 text-center">
            <h6>USEFUL LINKS</h6>
            <p><a href="#" className="text-secondary">Help Center</a></p>
            <p><a href="#" className="text-secondary">FAQs</a></p>
            <p><a href="#" className="text-secondary">Contact Us</a></p>
            <p><a href="#" className="text-secondary">Download the App</a></p>
          </div>
        </div>
        <div className="row yellow-warning-bg">
          <div className="col-sm-4 mt-2 text-center">
            <a href="#" className="text-light mx-2">Privacy Policy</a>
            <a href="#" className="text-light mx-2">Terms and Conditions</a>
            <a href="#" className="text-light mx-2">Jobs</a>
          </div>
          <div className="col-sm-4 mt-2 text-center">
            <a href="#"><i className="bi bi-facebook text-light mx-1"></i></a>
            <a href="#"><i className="bi bi-twitter text-light mx-1"></i></a>
            <a href="#"><i className="bi bi-instagram text-light mx-1"></i></a>
            <a href="#"><i className="bi bi-youtube text-light mx-1"></i></a>
          </div>
          <div className="col-sm-4 mt-2 text-center">
            <p className="text-light">Best-Tutors Inc. © Copyright 2021. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;