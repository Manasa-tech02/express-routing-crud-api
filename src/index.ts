import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import logger from './middleware/loggermiddleware';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); // Log all requests

app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
