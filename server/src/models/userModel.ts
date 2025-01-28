import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  gold: number;
  steps: number;
  world: string; //import
  level: number;
  exp: number;
  speed: number;
  strength: number;
  magicAttack: number;
  defence: number;
  magicDefence: number;
  health: number;
  helmet: Schema.Types.ObjectId; //import
  armor: Schema.Types.ObjectId; //import
  pants: Schema.Types.ObjectId; //import
  boots: Schema.Types.ObjectId; //import
  trinket1: Schema.Types.ObjectId; //import
  trinket2: Schema.Types.ObjectId; //import
  image: string;
}
const UserSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  gold: { type: Number, default: 0 },
  steps: { type: Number, default: 0 },
  world: { type: String, default: "" },
  level: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  speed: { type: Number, default: 5 },
  strength: { type: Number, default: 5 },
  magicAttack: { type: Number, default: 5 },
  defence: { type: Number, default: 5 },
  magicDefence: { type: Number, default: 5 },
  health: { type: Number, default: 5 },
  helmet: { type: Schema.Types.ObjectId, ref: "Item", default: null },
  armor: { type: Schema.Types.ObjectId, ref: "Item", default: null },
  pants: { type: Schema.Types.ObjectId, ref: "Item",default: null },
  boots: { type: Schema.Types.ObjectId, ref: "Item",default: null },
  trinket1: { type: Schema.Types.ObjectId, ref: "Item",default: null },
  trinket2: { type: Schema.Types.ObjectId, ref: "Item",default: null },
  image: { type: String, default: "" },
});

// export const UserSchema = new mongoose.Schema({
//   email: {type: String,unique: true,},
//   c: {type: mongoose.Schema.Types.ObjectId,ref: "User",},});
const User = model<IUser>("User", UserSchema);
export default User;