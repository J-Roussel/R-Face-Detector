import React, {FC, useState, useEffect} from 'react';
import '../header-pages/image.style.css';

interface Props {
    imageURL: string;
    useFallBack?: boolean; 
};

enum ImageLoadingState{
    Init,
    Loading,
    Complete,
    Error
}

const Image:FC<Props> = ({imageURL, useFallBack}) => {


    const [imageLoadingState, setImageLoadingState] = useState<ImageLoadingState>(ImageLoadingState.Init);


    {/**Change the state when there is a new imageURL */}
    useEffect(() => {
        setImageLoadingState(imageURL ? ImageLoadingState.Loading : ImageLoadingState.Error);
    }, [imageURL]);

    console.log(imageLoadingState);
    
    if(!imageURL){
        return null;
    };

    if(imageLoadingState === ImageLoadingState.Error && useFallBack){
        return (
            <div>Image Loading Failed...</div>
        );
    };

    return (
        <div>
            <img src={imageURL} onLoad={() => {
                setImageLoadingState(ImageLoadingState.Complete)
            }} onError ={() => setImageLoadingState(ImageLoadingState.Error)} 
            alt="image" 
            className='imageimage' 
            />
        </div>
    );
}

export default Image;