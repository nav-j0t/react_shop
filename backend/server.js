import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRouters from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running... :)');
});

app.use('/api/products', productRouters);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
