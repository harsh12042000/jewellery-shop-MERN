import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('ContactUs', contactSchema);
export default Contact;