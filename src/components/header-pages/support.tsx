import React from 'react';
import '../header-pages/support.css';
import Image from './image';

const Support:React.FunctionComponent = ():JSX.Element => {

    return(
        <div className='container-support'>
            <div>Please, support Us.</div>
            <p>This is just a test</p>
            <input type="file" id="fileToUpload" accept="image/*"/>
            <div>
                <Image imageURL='https://acdn-icons.flaticon.com/png/512/2602/premium/2602046.png?token=exp=1659516990~hmac=350c6a33c89fb151c9d175e5b308686a'
                useFallBack={true}
                />
            </div>
        </div>
    );
}

export default Support;