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

    const error = user.validateSync();
    if (error) {
    //     console.log("shlomot:.....................................................................................................")
    //   next(new Error(error.message));
        res.status(500).send({error: error.message});
        return;
    }
    user.save();
    console.log("user saved");
  } catch (err) {
    console.error(err);
  }
}
