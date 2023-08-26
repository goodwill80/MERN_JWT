import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';

// Connect to Mongo DB
connectDB();

const app = express();
// Body Parser
app.use(express.json());
// Enable formdata to be received
app.use(express.urlencoded({ extended: true }));
// Enable parsing of Cookie
app.use(cookieParser());
app.use(cors());

// Connect to routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready!'));

// Use of error handling middleware created
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
