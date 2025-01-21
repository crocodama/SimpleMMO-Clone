import { Schema, Document , model} from "mongoose";

// Define an interface for the Item document
export interface IItem extends Document {
  userId: string;
  name: string;
  type: string;
  quantity: number;
  isInCollection: boolean;
  npcSellPrice: number;
  speed: number;
  strength: number;
  magicAttack: number;
  defence: number;
  magicDefence: number;
  health: number;
  image: string;
}

// Create the schema
const ItemSchema: Schema = new Schema<IItem>({
  userId: { type: String, required: true }, //ref user
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  isInCollection: { type: Boolean, default: false },
  npcSellPrice: { type: Number, default: 0 },
  speed: { type: Number, default: 0 },
  strength: { type: Number, default: 0 },
  magicAttack: { type: Number, default: 0 },
  defence: { type: Number, default: 0 },
  magicDefence: { type: Number, default: 0 },
  health: { type: Number, default: 0 },
  image: { type: String, default: "" },
});

// Export the model
const Item = model<IItem>("Item", ItemSchema);

export default Item;
