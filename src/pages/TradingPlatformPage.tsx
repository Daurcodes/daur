import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import backgroundImage from '../styles/images/fonin.png'; // Импортируйте изображение

const TradingPlatformPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', // Сдвиг изображения фона
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '0' // Добавление отступа слева
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
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Box sx={{ my: 4, color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            Биржевая платформа
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default TradingPlatformPage;
