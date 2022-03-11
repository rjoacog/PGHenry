const mongoose = require("mongoose");
const { Schema } = mongoose;


const AvailableSizesSchema = new Schema({
    '5': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'6': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'7': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'7,5': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'8': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'8,5': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'9': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'10': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'11': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'12': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'12,5': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
}, { timestamps: false }
)



const AvailableSizes = mongoose.model("AvailableSizes", AvailableSizesSchema);
module.exports = AvailableSizes;