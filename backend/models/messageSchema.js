import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must be Conatin Atleast 3 Characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must be Conatin Atleast 3 Characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must be Conatin Atleast 10 Digits!"],
    maxLength: [11, "Phone Number Must be Conatin Atleast 10 Digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [3, "Phone Number Must be Conatin Atleast 3 Characters!"],
  }
});
export const Message = mongoose.model("Message", messageSchema);
