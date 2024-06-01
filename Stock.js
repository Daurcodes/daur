const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, default: 0 },
    purchased: { type: Boolean, default: false },
});

module.exports = mongoose.model('Stock', StockSchema);
