import { Schema, model } from "mongoose";

const ChatSchema = new Schema({
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Chat = model("Chat", ChatSchema);

export default Chat;
