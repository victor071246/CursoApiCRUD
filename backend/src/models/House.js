import { model, Schema } from "mongoose";

const HouseSchema = new Schema({
  thumnnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("House", UserSchema);
