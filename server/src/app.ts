import express, { type Express, type Request, type Response } from 'express';
import statusRoutes from '../routes/statusRoutes.ts';

const app: Express = express();
app.use(express.json());

// Routes
app.use('/api/health', statusRoutes);

// Default
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
