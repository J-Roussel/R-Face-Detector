import React from 'react';
import './contact.css';

const Contact:React.FunctionComponent = ():JSX.Element => {

    return(
        <>
            <div className='container-input-contact'>
                <p id='text-contact'>Open Up - Write and tell us your views - we are open to criticism, suggestions for improvement, questions, and of course we also like to receive praise... </p>
            </div>
            <div className="container-logo-contact">
                <p className='copyright'>&copy; J.Roussel Rakotonirina</p>
                <p className='copyright'>STD21050</p>
            </div>
        </>
    );
}

export default Contact;