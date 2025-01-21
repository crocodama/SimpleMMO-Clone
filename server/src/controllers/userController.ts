import { NextFunction, Request, Response } from "express";
import User from "../models/userModel";

export async function register(req:Request, res:Response, next:NextFunction) {
    const user = new User(req.body);
    const error = user.validateSync();
    if (error) {
        next(new Error(error.message));
    }
    user.save();
    console.log("user saved")
}