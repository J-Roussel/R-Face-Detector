import React from 'react';

export interface BoundingBox {
  Width: number;
  Height: number;
  Left: number;
  Top: number;
}

export interface AgeRange {
  Low: number;
  High: number;
}

export interface BoolValueAndConfidence {
  Value: boolean;
  Confidence: number;
}

export interface Gender {
  Value: string;
  Confidence: number;
}

export interface Emotion {
  Type: string;
  Confidence: number;
}

export interface Landmark {
  Type: string;
  X: number;
  Y: number;
}

export interface Pose {
  Roll: number;
  Yaw: number;
  Pitch: number;
}

export interface Quality {
  Brightness: number;
  Sharpness: number;
}

export interface RootObject {
  BoundingBox: BoundingBox;
  Gender: Gender;
  AgeRange: AgeRange;
  Emotion: Emotion;
  Smile: BoolValueAndConfidence;
  EyesOpen: BoolValueAndConfidence;
  Eyeglasses: BoolValueAndConfidence;
  Sunglasses: BoolValueAndConfidence;
  Beard: BoolValueAndConfidence;
  Mustache: BoolValueAndConfidence;
  MouthOpen: BoolValueAndConfidence;
  Pose: Pose;
  Landmarks: Landmark;
  Quality: Quality;
  Confidence: BoolValueAndConfidence;
}




const ListResponse: React.FC<{result : RootObject}> = (props : { result : RootObject}) => {
  return (
    <div className='container-all-result'>
        <div className='container-result'>
          <h4 className='left-part'>BoundingBox</h4>
          <div className='right-part'>
            <p>Width : {props.result.BoundingBox.Width}</p>
            <p>High : {props.result.BoundingBox.Height}</p>
            <p>High : {props.result.BoundingBox.Left}</p>
            <p>High : {props.result.BoundingBox.Top}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Gender</h4>
          <div className='right-part'>
            <p>Value : {props.result.Gender.Value}</p>
            <p>Condfidence : {props.result.Gender.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'> AgeRange</h4>
          <div className='right-part'>
            <p>High : {props.result.AgeRange.High}</p>
            <p>High : {props.result.AgeRange.Low}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Emotion</h4>
          <div className='right-part'>
            <p>Type : {props.result.Emotion.Type}</p>
            <p>Confidence : {props.result.Emotion.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Smile</h4>
          <div className='right-part'>
            <p>Value : {props.result.Smile.Value}</p>
            <p>Confidence : {props.result.Smile.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>EyesOpen</h4>
          <div className='right-part'>
            <p>Value : {props.result.EyesOpen.Value}</p>
            <p>Confidence : {props.result.EyesOpen.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Eyeglasses</h4>
          <div className='right-part'>
            <p>Value : {props.result.Eyeglasses.Value}</p>
            <p>Confidence : {props.result.Eyeglasses.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Sunglasses</h4>
          <div className='right-part'>
            <p>Type : {props.result.Sunglasses.Value}</p>
            <p>Confidence : {props.result.Sunglasses.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Beard</h4>
          <div className='right-part'>
            <p>Value : {props.result.Beard.Value}</p>
            <p>Confidence : {props.result.Beard.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Beard</h4>
          <div className='right-part'>
            <p>Value : {props.result.Mustache.Value}</p>
            <p>Confidence : {props.result.Mustache.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>MouthOpen</h4>
          <div className='right-part'>
            <p>Value : {props.result.MouthOpen.Value}</p>
            <p>Confidence : {props.result.MouthOpen.Confidence}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Pose</h4>
          <div className='right-part'>
            <p>Pitch : {props.result.Pose.Pitch}</p>
            <p>Roll : {props.result.Pose.Roll}</p>
            <p>Yaw : {props.result.Pose.Yaw}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Landmark</h4>
          <div className='right-part'>
            <p>Type : {props.result.Landmarks.Type}</p>
            <p>X : {props.result.Landmarks.X}</p>
            <p>Y : {props.result.Landmarks.Y}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Quality</h4>
          <div className='right-part'>
            <p>Type : {props.result.Quality.Brightness}</p>
            <p>X : {props.result.Quality.Sharpness}</p>
          </div>
        </div>
        <div className='container-result'>
          <h4 className='left-part'>Condidence</h4>
          <div className='right-part'>
            <p>Type : {props.result.Confidence.Value}</p>
            <p>X : {props.result.Confidence.Confidence}</p>
          </div>
        </div>

    </div>
  )
}

export default ListResponse