const mongoose = require("mongoose")

const savingSchema = new mongoose.Schema(
    {
        amount: {
          type: Number,
          default: 0,
        },
        category: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        date: { type: Date, required: true },
      },
      { timestamps: true }
)


const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
