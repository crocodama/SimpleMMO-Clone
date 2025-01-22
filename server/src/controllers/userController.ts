import { NextFunction, Request, Response } from "express";
import User from "../models/userModel";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);
    const user = new User(req.body);
    if(!user.email || !user.username || !user.password){
      res.status(400).send({error: "missing required fields"});
      return;
    }

    // const error = user.validateSync();
    // if (error) {
    // //     console.log("shlomot:.....................................................................................................")
    // //   next(new Error(error.message));
    //     res.status(500).send({error: error.message});
    //     return;
    // }
    user.save();
    console.log("user saved");
  } catch (err) {
    console.error(err);
  }
}
