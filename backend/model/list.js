import mongoose from "mongoose";

constListShcema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
        },
        genre: {
            type: Number,
        },
        content: { type: Array, default: [] },
    },
    { timestamps: true }
);

export default mongoose.model("List", ListShcema);
