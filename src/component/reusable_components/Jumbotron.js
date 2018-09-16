import React from 'react';

// Images
import dummyOne from '../../assets/dummy1.jpg';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Hii, I'am Sandeep Bansal</h1>
            <h2>
              I am sandeep and am based in Delhi, India. I am a frontend
              developer i make beutiful websites using latest technology like
              javascript, ReactJS, Html and CSS3, here are some of my latest
              projects that i have made.
            </h2>
            <button className="btn btn-success mb-4">ABOUT ME</button>
          </div>
          <div className="col-md-5">
            <img src={dummyOne} alt="dummy-one" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
