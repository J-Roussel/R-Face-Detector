import React from 'react'

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
  AgeRange: AgeRange;
  Smile: BoolValueAndConfidence;
  Eyeglasses: BoolValueAndConfidence;
  Sunglasses: BoolValueAndConfidence;
  Gender: Gender;
  Beard: BoolValueAndConfidence;
  Mustache: BoolValueAndConfidence;
  EyesOpen: BoolValueAndConfidence;
  MouthOpen: BoolValueAndConfidence;
  Emotions: Emotion[];
  Landmarks: Landmark[];
  Pose: Pose;
  Quality: Quality;
  Confidence: number;
}




const ListResponse: React.FC<{result : RootObject}> = (props : { result : RootObject}) => {
  return (
    <td>
      <h1> AgeRange</h1>
      <p>High : {props.result.AgeRange.High}</p>
    </td>
  )
}

export default ListResponse