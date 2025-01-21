import  { Schema, Document ,model} from "mongoose";

// Import related interfaces if needed
import { IItem } from "./itemModel"; // Adjust the path based on your project structure
import { IMonster } from "./monsterModel"; // Adjust the path based on your project structure

// Define an interface for the World document
export interface IWorld extends Document {
  id: string;
  minLevel: number;
  items: IItem[]; // Array of items
  monsters: IMonster[]; // Array of monsters
}

// Create the schema
const WorldSchema: Schema = new Schema<IWorld>({
  id: { type: String, required: true },
  minLevel: { type: Number, required: true, default: 1 },
  items: [
    {
      type: Schema.Types.Mixed,
      ref: "Item", // Assuming Item is the model name
    },
  ],
  monsters: [
    {
      type: Schema.Types.Mixed,
      ref: "Monster", // Assuming Monster is the model name
    },
  ],
});

// Export the model
const World = model<IWorld>("World", WorldSchema);

export default World;
