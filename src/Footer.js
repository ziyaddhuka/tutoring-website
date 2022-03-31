import React from 'react';

const Footer = (props) =>{
    //source: https://getbootstrap.com/docs/4.0/utilities/colors/
    //source: https://www.cambly.com/english?lang=en
    //source: https://mdbootstrap.com/docs/standard/navigation/footer/
    //source: https://getbootstrap.com/docs/4.0/utilities/spacing/
    //source: https://icons.getbootstrap.com
    //bg-warning = yellow background
	return (
      <footer>
        <div class="row bg-light">
          <div class="col-sm-4 mt-4 text-center">
            <h6>ABOUT</h6>
            <p><a href="#" class="text-secondary">Courses</a></p>
            <p><a href="#" class="text-secondary">Tutors</a></p>
            <p><a href="#" class="text-secondary">Pricing</a></p>
            <p><a href="#" class="text-secondary">Blogs</a></p>
            <p><a href="#" class="text-secondary">Careers</a></p>
          </div>
          <div class="col-sm-4 mt-4 text-center">
            <h6>JOIN</h6>
            <p><a href="#" class="text-secondary">As a Student</a></p>
            <p><a href="#" class="text-secondary">As a Tutor</a></p>
            <p><a href="#" class="text-secondary">As an Organization</a></p>
          </div>
          <div class="col-sm-4 mt-4 text-center">
            <h6>USEFUL LINKS</h6>
            <p><a href="#" class="text-secondary">Help Center</a></p>
            <p><a href="#" class="text-secondary">FAQs</a></p>
            <p><a href="#" class="text-secondary">Contact Us</a></p>
            <p><a href="#" class="text-secondary">Download the App</a></p>
          </div>
        </div>
        <div class="row yellow-warning-bg">
          <div class="col-sm-4 mt-2 text-center">
            <a href="#" class="text-light mx-2">Privacy Policy</a>
            <a href="#" class="text-light mx-2">Terms and Conditions</a>
            <a href="#" class="text-light mx-2">Jobs</a>
          </div>
          <div class="col-sm-4 mt-2 text-center">
            <a href="#"><i class="bi bi-facebook text-light mx-1"></i></a>
            <a href="#"><i class="bi bi-twitter text-light mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-light mx-1"></i></a>
            <a href="#"><i class="bi bi-youtube text-light mx-1"></i></a>
          </div>
          <div class="col-sm-4 mt-2 text-center">
            <p class="text-light">Best-Tutors Inc. © Copyright 2021. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;