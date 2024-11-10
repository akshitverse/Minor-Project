import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/AccessZone';

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));
