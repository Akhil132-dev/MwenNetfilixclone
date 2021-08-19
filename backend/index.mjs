import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './Routes/auth.js'
const app = express();

dotenv.config();
app.use(express.json())



/** @dev connecting to mongoDb */

mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>console.log("connneted to mongodb")).catch((err)=>console.log(err))
app.use('/api/auth',authRoute)

const port = process.env.PORT || 9099;
app.listen(port, () => console.log(`Listening on ${port}`));
