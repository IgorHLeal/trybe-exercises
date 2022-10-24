import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import frameRouter from './routes/Router';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(frameRouter);

export default app;