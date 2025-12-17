import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import userRoutes from './routes/route.user.js';
import todoRoutes from './routes/route.todo.js';

dotenv.config();
const app = express();
connectDB();



const PORT = 3000;


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})