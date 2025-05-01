import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(process.env.DATABASE_URL)
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDb connection failed', err);
        process.exit(1);
    }
}