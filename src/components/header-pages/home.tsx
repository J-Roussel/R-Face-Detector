import React from 'react';
import illustration from '../images/illustration.png';
import cloudy from '../images/cloudy.png';
import { Link } from 'react-router-dom';
import './home.css';

const Home:React.FunctionComponent = ():JSX.Element => {

    return(
        <div>

  
    
      {/*Body*/}      
        <div className="body">
          {/**illustration with text */}
          <div className="home-description">
            <img src={cloudy} alt="cloudy" />
            <div className="text-description">
              <h2 className='title-home'>Let me detect your face,</h2>
              <p className='descri'>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;R'Face Detector can identify key facial features, that is to say that it detects faces in an 
                image and get its contours. In fact, all useful information about finding a human face in an image 
                will be collected. Very much research is going in this area. 
              </p>
            </div>
            <div className='container-start'>    
              <Link to="/demo" id="start">START NOW</Link>
            </div>
          </div>
  
          {/*illustration of the concept of the website with an image */}
          <div className="home-image-illustration">
            <img src={illustration} alt="face recognition" />
          </div>
  
        </div>
      </div>
    );
}

export default Home;