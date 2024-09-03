import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/campaign`);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to MOngoDB", error)
        process.exit(1)
        
    }
}