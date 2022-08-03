import React, {useState} from 'react';
import './demo.css';

import InputImage from '../body/Input/InputImage';

const Demo:React.FunctionComponent = ():JSX.Element => {
 
   

    return(
        <div className='container-demo'>
            <div className="content-demo">
                <div className="head-demo">
                    <div className='container-title-demo'><h2 className='title-demo'>This is the demo page</h2></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et sunt ipsum voluptas repellendus numquam expedita fugit, nulla fugiat magni. Sequi alias voluptatum quae ducimus! Maiores atque voluptatibus quas cupiditate.</p>
                </div>
                <div className="body-demo">
                    <div className="imported-image">
                        <InputImage /> {/*To imported image will replace the logo-no-image */}
                         {/*This explication will be replace to the name of the imported image */}
                    </div>
                </div>
                <div className="foot-demo">
                    <p className='guide'> &copy; J.Roussel RAKOTONIRINA</p>
                </div>
            </div>
        
        </div>
    );
}

export default Demo;