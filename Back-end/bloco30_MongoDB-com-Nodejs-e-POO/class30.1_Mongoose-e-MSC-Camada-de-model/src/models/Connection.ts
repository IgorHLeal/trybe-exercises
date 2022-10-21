import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
|| 'mongodb://igorleal:Maranata@localhost:27017/glassesStore?authSource=admin',
/*   mongoDatabaseURI = process.env.MONGO_URI
  || 'mongodb:127.0.0.1:27017/glassesStore', */
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;