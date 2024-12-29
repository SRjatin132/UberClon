const dotenv = require('dotenv');
const express = require('express');
const connectToDb = require('./Db/db');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./Routes/UserRoutes');
const cors = require('cors');
const app = express();
app.use('/users', userRoutes);
connectToDb();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
module.exports = app;