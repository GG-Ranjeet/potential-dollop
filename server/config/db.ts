import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try{
        const mongoUri = process.env.MONGO_URI || console.error("no MONGO_URI");
        if (!mongoUri){
            console.error()
            process.exit(1);
        }

        const conn = await mongoose.connect(mongoUri);

        console.log(`🍃 MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch(error){
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
}