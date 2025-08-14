const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://live-polling-system-seven-gamma.vercel.app'
};

module.exports = config;


