import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import userRouter from './routes/userRouter';
import { errorMiddleware } from './controllers/middlewares/errorMidlleware';

const app = express();
app.use(cors({origin: 'http://localhost:5173',credentials: true}));
//connection to db
const dbUrl=process.env.DB_URL as string;
const port = +process.env.PORT!
const mongoose = require('mongoose');
mongoose.connect(`${dbUrl}/collectionName`).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use('/users',userRouter);
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})