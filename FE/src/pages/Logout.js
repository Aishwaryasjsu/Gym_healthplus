import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LogoutPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            await logout();
            navigate('/');
        };

        handleLogout();
    }, [logout]);

    return (
        <div>
            <h1>Logging out...</h1>
            {/* You can add a loading spinner or other elements here */}
        </div>
    );
};

export default LogoutPage;
