import { Container } from '@mui/material';
import React from 'react';
import UserDataSearch from '../components/UserDataSearch';
import NavBar from '../components/EmployeeNavBar';

const EmployeeDashboard = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <UserDataSearch />
            </Container>
        </div>);
}
export default EmployeeDashboard;