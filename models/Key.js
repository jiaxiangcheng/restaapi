import mongoose from "mongoose";

const KeySchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	key: {
		type: String,
		required: true,
	},
});

export default mongoose.model("Key", KeySchema);
