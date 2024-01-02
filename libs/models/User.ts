import mongoose, { Document, Model, model, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "/images/profile.png",
    },
  },
  { timestamps: true },
);

export interface IUser extends Document {
  _id?: string;
  username: string;
  password: string;
  email: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  isAdmin?: string;
}

const UserModel: Model<IUser> = models.User || model<IUser>("User", userSchema);
export default UserModel;
