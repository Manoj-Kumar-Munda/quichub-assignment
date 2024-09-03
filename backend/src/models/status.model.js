import { model, Schema } from "mongoose";

const messageStatusSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: "Campaign",
  },
  status: {
    type: Boolean,
    required: true,
  },
});

const MessageStatus = model("MessageStatus", messageStatusSchema);
export default MessageStatus;
