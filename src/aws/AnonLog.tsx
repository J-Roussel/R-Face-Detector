import AWS from "aws-sdk";

//
export const AnonLog = () => {
    AWS.config.region= process.env.region as string
    AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
        IdentityPoolId: process.env.IdentityPoolId as string
    })
}