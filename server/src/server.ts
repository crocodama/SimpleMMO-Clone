import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import userRouter from './routes/userRouter';

const app = express();
app.use(cors({origin:'http://localhost:5173'}));
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
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  console.error(err ,"hi")
  res.status(500).send('Something broke!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})