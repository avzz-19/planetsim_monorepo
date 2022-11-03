const awsConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
    // roleArn: process.env.NEXT_PUBLIC_ROLE_ARN,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
    mandatorySignIn: false,
  },
  ssr: true,
  // aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT,
  // aws_appsync_region: process.env.NEXT_PUBLIC_APPSYNC_REGION,
  // aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
}

export default awsConfig
