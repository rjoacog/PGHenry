const mongoose = require("mongoose");
const { Schema } = mongoose;


const PriceSchema = new Schema({
    '70': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'75': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'80': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'85': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'90': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'95': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'100': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'105': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'110': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'115': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'120': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
    '125': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'130': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'135': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'140': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'145': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'150': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'155': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'160': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'165': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'170': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'175': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
    '180': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'185': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'190': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'195': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'200': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'205': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'210': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'215': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'220': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'225': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'230': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
    '235': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'240': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'245': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'250': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'255': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'260': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'265': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'270': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'275': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'280': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'285': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
    '290': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'295': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'300': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'305': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'310': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	'315': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
    },
	'320': {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
})


const Price = mongoose.model("Price", PriceSchema);
module.exports = Price;