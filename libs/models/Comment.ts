import mongoose, { Document } from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface IComment extends Document {
  _id?: string;
  blogId: string;
  comment: string;
  author: string;
  createdAt?: string;
  updatedAt?: string;
}

let CommentModel: mongoose.Model<IComment>;

try {
  CommentModel = mongoose.model<IComment>("Comment");
} catch {
  CommentModel = mongoose.model<IComment>("Comment", CommentSchema);
}

export default CommentModel;
