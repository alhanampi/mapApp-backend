import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPin extends Document {
  username: string;
  title: string;
  rating: number;
  lat: number;
  long: number;
}

const PinSchema: Schema<IPin> = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const PinModel: Model<IPin> = mongoose.model("Pin", PinSchema);

export default PinModel;
