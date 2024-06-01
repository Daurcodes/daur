import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = { firstName: '', lastName: '', email: '', password: '' };
        let isValid = true;

        if (!formData.firstName) {
            tempErrors.firstName = 'Имя обязательно';
            isValid = false;
        }
        if (!formData.lastName) {
            tempErrors.lastName = 'Фамилия обязательна';
            isValid = false;
        }
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data submitted:', formData);
            // Здесь можно добавить логику для отправки данных на сервер
        }
    };

    return (
        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Регистрация
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        fullWidth
                        margin="normal"
                    />
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
                            Зарегистрироваться
                        </Button>
                    </Box>
                </form>
                <Typography variant="body2">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default RegistrationPage;
