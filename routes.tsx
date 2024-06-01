import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import TradingPlatformPage from './pages/TradingPlatformPage';
import CombinedPage from './pages/CombinedPage';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/my-money" element={<ProtectedRoute component={CombinedPage} />} />
                <Route path="/stock-platform" element={<ProtectedRoute component={CombinedPage} />} />
                <Route path="/trading-platform" element={<ProtectedRoute component={TradingPlatformPage} />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
