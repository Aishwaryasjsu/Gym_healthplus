import React from 'react';
import "../css/GymClasses.css"; // Import the CSS file
import course1 from "../assets/images/course-1.jpeg";
import course2 from "../assets/images/course-2.jpeg";
import course3 from "../assets/images/course-3.jpeg";

const GymClasses = () => {
  return (
    <section className="section-classes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="heading-section">Our Classes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-1">
              <a href="#" className="img-link">
                <img src={course1} alt="Course 1" className="img-fluid" />
              </a>
              <div className="text-center">
                <h3 className="mb-2">Weightlifting</h3>
                <p className="category">Strength Training</p>
                <p className="trainer">Trainer: John Doe</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-1">
              <a href="#" className="img-link">
                <img src={course2} alt="Course 2" className="img-fluid" />
              </a>
              <div className="text-center">
                <h3 className="mb-2">Yoga</h3>
                <p className="category">Flexibility & Mindfulness</p>
                <p className="trainer">Trainer: Jane Smith</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-1">
              <a href="#" className="img-link">
                <img src={course3} alt="Course 3" className="img-fluid" />
              </a>
              <div className="text-center">
                <h3 className="mb-2">Cardio Kickboxing</h3>
                <p className="category">Cardio & Martial Arts</p>
                <p className="trainer">Trainer: Mike Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymClasses;
