import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      match: [/^https?:\/\/\S+$/, "Por favor ingresa un enlace válido"],
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
