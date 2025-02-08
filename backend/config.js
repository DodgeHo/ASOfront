import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://admin:admin@localhost:27017/aso',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'paypalClientId',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};

export default config;