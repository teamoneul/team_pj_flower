import mongoose from "mongoose";

const flowerBottleSchema = new mongoose.Schema({
  creater: { type: String, required: true },
  owner: { type: String, required: true },
  createDate: { type: Date, required: true },
  completeDate: { type: Date, required: true },
  flowerType: { type: String, required: true },
  letterCount: { type: Number, required: true },
  leter: { type: Array },
});

const FlowerBottle = mongoose.model("FlowerBottle", flowerBottleSchema);
export default FlowerBottle;
