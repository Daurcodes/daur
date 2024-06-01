import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TradingPlatform from './pages/TradingPlatformPage';
import MyMoney from './pages/CombinedPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/trading-platform" element={<TradingPlatform />} />
                <Route path="/my-money" element={<MyMoney />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/logout" element={<div>Logout</div>} /> {/* Пример компонента Logout */}
            </Routes>
        </Router>
    );
};

export default App;
