import mongoose, { Document } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export interface IBlog extends Document {
  _id?: string;
  title: string;
  content: string;
  tag: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

let BlogModel: mongoose.Model<IBlog>;

try {
  BlogModel = mongoose.model<IBlog>("Blog");
} catch {
  BlogModel = mongoose.model<IBlog>("Blog", blogSchema);
}

export default BlogModel;
