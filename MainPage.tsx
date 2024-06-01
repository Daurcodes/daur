import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Box, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import '../styles/MainPage.css';

const FeatureBox = styled(Box)({
    padding: '10px',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#000',
    marginBottom: '10px',
    width: '200px',
    height: '150px',
    margin: '10px'
});

const NavButton = styled(Button)({
    margin: '0 10px',
    '&:hover': {
        color: '#ffeb3b',
    }
});

const MainPage: React.FC = () => {
    return (
        <div className="main-container">
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Box display="flex" flexGrow={1} justifyContent="center" gap={3}>
                        <NavButton color="inherit" >
                            Главная
                        </NavButton>
                        <NavButton color="inherit" >
                            Торговая площадка
                        </NavButton>
                        <NavButton color="inherit" >
                            Мои деньги
                        </NavButton>
                    </Box>
                    <Box>
                        <NavButton color="inherit" >
                            Выход
                        </NavButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Добро пожаловать в Finance Portal
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Управляйте своими финансами легко и эффективно
                </Typography>
                <Box mt={4} display="flex" justifyContent="center" gap={4}>
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Вход
                    </Button>
                    <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Регистрация
                    </Button>
                </Box>
                <Box display="flex" justifyContent="center" flexWrap="wrap" mt={4}>
                    <FeatureBox className="feature-box">
                        <Typography variant="h6" component="h3" gutterBottom>
                            Анализ портфеля
                        </Typography>
                        <Typography variant="body2">
                            Получите подробный анализ вашего инвестиционного портфеля.
                        </Typography>
                    </FeatureBox>
                    <FeatureBox className="feature-box">
                        <Typography variant="h6" component="h3" gutterBottom>
                            Текущие тренды
                        </Typography>
                        <Typography variant="body2">
                            Следите за последними тенденциями на рынке и принимайте информированные решения.
                        </Typography>
                    </FeatureBox>
                    <FeatureBox className="feature-box">
                        <Typography variant="h6" component="h3" gutterBottom>
                            Персональные советы
                        </Typography>
                        <Typography variant="body2">
                            Получите персонализированные рекомендации от наших экспертов.
                        </Typography>
                    </FeatureBox>
                    <FeatureBox className="feature-box">
                        <Typography variant="h6" component="h3" gutterBottom>
                            Поддержка 24/7
                        </Typography>
                        <Typography variant="body2">
                            Наша команда всегда готова помочь вам с любыми вопросами.
                        </Typography>
                    </FeatureBox>
                </Box>
            </Container>
        </div>
    );
};

export default MainPage;
