import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import backgroundImage from '../styles/images/моиденьги.webp'; // Импортируйте изображение

const CombinedPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Данные по акциям
    const userStocks = [
        { id: 1, name: 'Kaspi.kz AO', symbol: 'KSPI', price: 300000, amount: 20 },
        { id: 2, name: 'Air Astana AO', symbol: 'AKSA', price: 500000, amount: 50 },
        { id: 3, name: 'KazTransOil AO', symbol: 'KTO', price: 600000, amount: 30 },
        { id: 4, name: 'NAK Kazatomprom AO', symbol: 'KZAP', price: 200000, amount: 10 },
        { id: 5, name: 'NK KazMunayGas AO', symbol: 'KMG', price: 150000, amount: 15 },
        { id: 6, name: 'Kcell AO', symbol: 'KCEL', price: 250000, amount: 25 }
    ];

    const totalValue = 2000000; // Общая сумма в тенге

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            color: 'white', // Изменение цвета шрифтов на белый
        }}>
            <AppBar position="static" sx={{ backgroundColor: '#2E3761' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
                        <Button color="inherit" onClick={() => handleNavigation('/')}>
                            Главная
                        </Button>
                        <Button color="inherit" onClick={() => handleNavigation('/trading-platform')}>
                            Торговая площадка
                        </Button>
                        <Button color="inherit" onClick={() => handleNavigation('/my-money')}>
                            Мои деньги
                        </Button>
                    </Box>
                    <Box>
                        <Button color="inherit" onClick={() => handleNavigation('/logout')}>
                            Выход
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                        Мои деньги
                    </Typography>
                    <Typography variant="h6" component="p" style={{ color: 'black' }}>
                        Общая стоимость акций: {totalValue.toLocaleString()} тенге
                    </Typography>
                    <Box sx={{ my: 2 }}>
                        <Grid container spacing={2}>
                            {userStocks.map((stock) => (
                                <Grid item xs={12} sm={6} md={4} key={stock.id}>
                                    <Paper elevation={3} sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
                                        <Typography variant="h6">{stock.name} ({stock.symbol})</Typography>
                                        <Typography variant="body1">
                                            {stock.amount} акций x {(stock.price / stock.amount).toLocaleString()} тенге = {stock.price.toLocaleString()} тенге
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default CombinedPage;
