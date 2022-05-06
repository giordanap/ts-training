import mongoose, { connection } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async() => {
    try {
        let cadena:string = process.env.MONGO_CONNECTION || '';
        await mongoose.connect(cadena);
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        throw new Error('Error launching database');
    }
}

export default dbConnection;