const mongoose = require("mongoose");

// Define the Tags schema
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
        type: String,
        required: true,

    },
    message : {
        type: String,
        required: true,

    },
});

// Export the Tags model
module.exports = mongoose.model("Contact", contactSchema);
