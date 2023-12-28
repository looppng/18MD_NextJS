import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    tag: String,
  },
  {
    timestamps: true,
  },
);
delete mongoose.connection.models["Blog"];
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
