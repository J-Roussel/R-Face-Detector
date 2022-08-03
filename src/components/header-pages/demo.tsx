import React, {useState} from 'react';
import './demo.css';
import { DetectFacesResponse } from 'aws-sdk/clients/rekognition';

import AWS, {AWSError} from 'aws-sdk';
import ListResponse from '../body/Input/ListResponse';
import { ProcessImage } from '../../aws/ProcessImage';

const Demo:React.FunctionComponent = ():JSX.Element => {
 
    //demo:
    const [image,setImage] = useState();
    const [dataValues,setDataValues] = useState<DetectFacesResponse | null>(null);
    const [isUpload,setIsUpload] = useState<boolean>(false);


    const rekognition = new AWS.Rekognition()
    const DetectFaces = (ImageData : ArrayBuffer) => {
      AWS.config.region = process.env.region as string;
      const params= {
        Image: {
          Bytes: ImageData
        },
        Attributes : [
          'ALL',
        ]
      }
    
      rekognition.detectFaces(params, function (err: AWSError, data:DetectFacesResponse){
        if (err) {
          console.log(err,err.stack)
        }
        else {
          console.log(data);
          setDataValues(data);
          setIsUpload(true)
          
        }
    })
      
    }

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        ProcessImage(e.target.files[0], DetectFaces)
        //@ts-ignore
        setImage(URL.createObjectURL(e.target.files[0]))
      }

    //demo--fin
   

    return(
        <div className='container-demo'>
            <div className="content-demo">
                <div className="head-demo">
                    <div className='container-title-demo'><h2 className='title-demo'>This is the demo page</h2></div>
                    <p>R'Face Detector can identify key facial features, it detects faces in an image and get its contours. In fact, all useful information about finding a human face in an image will be collected. Very much research is going in this area.</p>
                </div>
                <div className="body-demo">
                    <div className="imported-image">
                    <div className='container'>
                        {isUpload? 
                            (
                            <div className='row'>
                                <div className='col-4'>
                                <img src={image} alt="" />
                                </div>
                                <div className='col-7'>
                                {
                                    //@ts-ignore
                                    <ListResponse result={dataValues?.FaceDetails[0]}/>                                     
                                }
                                console.log(dataValues?.FaceDetails[0]);
                            </div>
                            </div>    
                        ) : 
                        <div className='result'>
                            <input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" onChange={handleInputChange}/>
                            <div className='input-btn-demo'>
                                <label htmlFor="fileToUpload" className='start-button' id='start-button-demo'>Add your picture</label>
                            </div>
                        </div>
                        }
                    </div> {/*To imported image will replace the logo-no-image */}
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