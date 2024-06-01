import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = { email: '', password: '' };
        let isValid = true;

        if (!formData.email) {
            tempErrors.email = 'Email обязателен';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email некорректен';
            isValid = false;
        }
        if (!formData.password) {
            tempErrors.password = 'Пароль обязателен';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await login(formData.email, formData.password);
                console.log('Login successful:', response);
                navigate('/my-money'); // Перенаправление на страницу "Мои деньги" после успешного входа
            } catch (error) {
                console.error('Ошибка входа:', error);
                setErrors({ email: '', password: 'Неверный email или пароль' });
            }
        }
    };

    return (
        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Вход
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Пароль"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        fullWidth
                        margin="normal"
                    />
                    <Box mt={2} mb={2}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default LoginPage;
