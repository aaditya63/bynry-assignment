const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 5000;
const profileRouter = require('./routes/profileRoutes')
const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))

require('dotenv').config();

app.use(cors({
    origin: "https://bynry-assignment.onrender.com",
    credentials: true,
}));



app.use('/api',profileRouter)


//Database connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:'BynrySubmission'
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
connectDB();


app.listen(port,()=>{
    console.log("Server Started");
})