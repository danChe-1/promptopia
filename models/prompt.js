const { Schema, models, model } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Propmpt is reqiuired"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

