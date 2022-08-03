import AWS, { AWSError } from 'aws-sdk'
import { DetectFacesResponse } from 'aws-sdk/clients/rekognition'
import React, { useState } from 'react'
import { ProcessImage } from '../../../aws/ProcessImage';
import ListResponse from './ListResponse';

import '../../body/Input/InputImage.css';

const InputImage = () => {
  const [image,setImage] = useState()
  const [dataValues,setDataValues] = useState<DetectFacesResponse | null>(null)
  const [isUpload,setIsUpload] = useState<boolean>(false)

  // 
  const rekognition = new AWS.Rekognition()
  const DetectFaces = (ImageData : ArrayBuffer) => {
    AWS.config.region = process.env.REACT_APP_REGION as string;
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
  return (
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
          </div>
        </div>    
      ) : 
      <div className='result'>
        <input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" onChange={handleInputChange}/>
        <div className='input-btn-demo-input'>
          <label htmlFor="input-btn-demo" className='start-button'>Add your picture</label>
        </div>
      </div>
      }
    </div>
    
  )
}

export default InputImage