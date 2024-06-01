const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

// Получение всех акций
router.get('/', async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Добавление новой акции
router.post('/', async (req, res) => {
    const { name, symbol, price, userId } = req.body;

    const stock = new Stock({
        name,
        symbol,
        price,
        userId
    });

    try {
        const newStock = await stock.save();
        res.status(201).json(newStock);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Покупка акций
router.post('/buy', async (req, res) => {
    const { symbol, userId, amount } = req.body;

    try {
        const stock = await Stock.findOne({ symbol });
        if (!stock) {
            return res.status(404).json({ message: 'Акция не найдена' });
        }

        stock.amount += amount;
        stock.purchased = true;
        await stock.save();

        res.json(stock);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Продажа акций
router.post('/sell', async (req, res) => {
    const { symbol, userId, amount } = req.body;

    try {
        const stock = await Stock.findOne({ symbol });
        if (!stock) {
            return res.status(404).json({ message: 'Акция не найдена' });
        }

        stock.amount -= amount;
        if (stock.amount < 0) {
            return res.status(400).json({ message: 'Недостаточно акций для продажи' });
        }

        await stock.save();

        res.json(stock);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
