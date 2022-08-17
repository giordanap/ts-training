import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async() => {
    try {
        await mongoose.connect(<string>process.env.MONGO_CONNECTION);
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        throw new Error('Error launching database');
    }
}

export default dbConnection;