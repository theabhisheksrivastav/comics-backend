import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import{DB_NAME} from "../constant.js";


// code for mongoDB connection
// const connectDB = async () => {
//     try {
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error('Error connecting to MongoDB: ', error);
//         process.exit(1);
//     }
// }

// code for mongodb server connection similar to cache server
const connectDB = async () => {
    try {
        const mongoServer = await MongoMemoryServer.create();
        const uri = `${mongoServer.getUri()}${DB_NAME ? DB_NAME : ''}`;
        const connectionInstance = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
};

export default connectDB;