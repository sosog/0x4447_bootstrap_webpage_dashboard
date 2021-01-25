export const privateRuntimeConfig = {}

export const publicRuntimeConfig = {
  AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
  AWS_COGNITO_APP_CLIENT_ID: process.env.AWS_COGNITO_APP_CLIENT_ID,
  AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID,
  AWS_USER_FILES_S3_BUCKET: process.env.AWS_USER_FILES_S3_BUCKET,
  AWS_USER_FILES_S3_REGION: process.env.AWS_USER_FILES_S3_REGION,
  STRIPE_PRICE_ID_MONTH: process.env.STRIPE_PRICE_ID_MONTH,
  STRIPE_PRICE_ID_YEAR: process.env.STRIPE_PRICE_ID_YEAR,
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
}
