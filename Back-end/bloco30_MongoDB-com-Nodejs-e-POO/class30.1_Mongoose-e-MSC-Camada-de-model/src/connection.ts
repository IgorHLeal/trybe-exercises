import { connect } from 'mongoose';
require('dotenv').config();

const options = {
  user: process.env.USER,
  pass: process.env.PASS,
  autoIndex: false,
  dbName: process.env.DB_NAME || 'glassesStore',
};

connect('mongodb://localhost:27017/', options);