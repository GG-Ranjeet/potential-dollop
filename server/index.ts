import app from './src/app.ts';
import dotenv from 'dotenv';
import { connectDB } from './config/db.ts';

dotenv.config();
const PORT = process.env.PORT;

connectDB()

app.listen(PORT, () => {
  console.log(`[SERVER] Server is running on http://localhost:${PORT}`)
});