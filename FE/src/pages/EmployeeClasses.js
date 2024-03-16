import { Container } from '@mui/material';
import React from 'react';
import ViewClasses from '../components/ViewClasses';
import NavBar from '../components/EmployeeNavBar';

const EmployeeClasses = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <ViewClasses />
            </Container>
        </div>);
}
export default EmployeeClasses;