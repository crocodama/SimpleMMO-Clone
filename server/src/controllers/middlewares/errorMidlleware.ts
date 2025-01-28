import { NextFunction, Request, Response } from "express"

export const errorMiddleware = (err:{status:number,msg:string}, req:Request, res:Response, next:NextFunction) => {
    if (process.env.NODE_ENV !== 'production') {
        res.status(err.status||500).send(err.msg);
    }else {
        if (err.status !==500){
            res.status(err.status).send(err.msg);
        }else{
            res.status(500).send('Internal Server Error');
        }
    }
  }