import { NextFunction, Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import { createToken } from "./authController";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email ||!password) {
      next({status:400,msg:"missing email or password"});
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      next({status:401,msg:"invalid email or password"});
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      next({status:401,msg:"invalid email or password"});
      return;
    }
    console.log(user);
    const token = createToken(user.id);
    console.log(token);
    res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3});
    res.status(200).send(user);
    console.log("User logged in");
  } catch (err) {
    console.error(err);
    //@ts-ignore
    next({status:400,msg:err?.message});
  }
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = new User(req.body);
    if (!user.email || !user.username || !user.password) {
      res.status(400).send({ error: "missing required fields" });
      return;
    }
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();
    console.log("user saved");
  } catch (err) {
    console.error(err);
    //@ts-ignore
    res.status(400).send({ error: err?.message });
  }
}
