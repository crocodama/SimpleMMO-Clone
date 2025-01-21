import { Schema, Document,model } from "mongoose";

// Import the Item interface if it's used as a reference
import { IItem } from "./itemModel"; // Adjust the path based on your project structure

// Define an interface for the Monster document
export interface IMonster extends Document {
  name: string;
  level: number;
  speed: number;
  strength: number;
  magicAttack: number;
  defence: number;
  magicDefence: number;
  health: number;
  helmet?: IItem | null;
  trinket1?: IItem | null;
  trinket2?: IItem | null;
  boots?: IItem | null;
  pants?: IItem | null;
  armor?: IItem | null;
  image: string;
}

// Create the schema
const MonsterSchema: Schema = new Schema<IMonster>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  speed: { type: Number, default: 5 },
  strength: { type: Number, default: 5 },
  magicAttack: { type: Number, default: 5 },
  defence: { type: Number, default: 5 },
  magicDefence: { type: Number, default: 5 },
  health: { type: Number, default: 5 },
  helmet: { type: Schema.Types.Mixed, ref: "Item", default: null }, // Assuming an Item document
  trinket1: { type: Schema.Types.Mixed, ref: "Item", default: null },
  trinket2: { type: Schema.Types.Mixed, ref: "Item", default: null },
  boots: { type: Schema.Types.Mixed, ref: "Item", default: null },
  pants: { type: Schema.Types.Mixed, ref: "Item", default: null },
  armor: { type: Schema.Types.Mixed, ref: "Item", default: null },
  image: { type: String, default: "" },
});

// Export the model
const Monster = model<IMonster>("Monster", MonsterSchema);

export default Monster;
