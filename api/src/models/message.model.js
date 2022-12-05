import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Message = model("Message", MessageSchema);

export default Message;
