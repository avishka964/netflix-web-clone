const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
