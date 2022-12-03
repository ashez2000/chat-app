import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = model("Message", MessageSchema);

export default Message;
