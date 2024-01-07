import mongoose, { Document, Model } from "mongoose";

const TagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
  },
});

export interface ITag extends Document {
  _id: string;
  tag: string;
}

const TagModel: Model<ITag> =
  mongoose.models.Tag || mongoose.model<ITag>("Tag", TagSchema);

export default TagModel;
