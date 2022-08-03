import AWS from "aws-sdk";

//
export const AnaLog = () => {
    AWS.config.region= process.env.region as string;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
        IdentityPoolId: process.env.IdentityPoolId as string
    })
}