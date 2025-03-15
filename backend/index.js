import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './route/user.route.js'
// import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
// Router.use();
dotenv.config();



const PORT = process.env.PORT || 2000;
const URI = process.env.MongoDBURI;

// connect to mongoDB server
try {
    mongoose.connect(URI);
    console.log("connected mongodb");
} catch (error) {
    console.log("error:", error);
}

app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});