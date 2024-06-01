const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Пример логики аутентификации
    if (email === 'test@example.com' && password === 'password') {
        return res.json({ message: 'Login successful', user: { email } });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/api/auth/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // Пример логики регистрации
    return res.json({ message: 'Registration successful', user: { firstName, lastName, email } });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
