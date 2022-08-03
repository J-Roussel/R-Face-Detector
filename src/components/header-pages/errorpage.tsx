import React from 'react';
import error from '../images/error.jpg';
import './error.css';
import {Link} from 'react-router-dom';

const Error:React.FunctionComponent = ():JSX.Element => {

    return(
        <div className='container-error'>
            <div className='error-illustration'>
            <img src={error} alt="The page can't be found" />
            </div>
            <div className='text'>
                Error, page not found. <br />
                <Link to="/home" className='Link'>Click here to go to the home page.</Link>
            </div>
        </div>
    );
}

export default Error;