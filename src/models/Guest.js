import mongoose from "mongoose";

const guestSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      enum: ["confirmed", "declined", "pending"],
      default: "pending",
    },
    companions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Guest", guestSchema);
