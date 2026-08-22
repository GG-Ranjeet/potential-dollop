import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try{
        const mongoUri = process.env.MONGO_URI || console.error("no MONGO_URI");
        if (!mongoUri){
            console.error()
            process.exit(1);
        }

        const conn = await mongoose.connect(mongoUri);

        console.log(`🍃 MongoDB Connected Successfully: mongodb://${conn.connection.host}:${conn.connection.port}`);
    } catch(error){
        console.error('❌ Database connection failed:', error);
        // fix:
        // net start MongoDB
        process.exit(1);
    }
}