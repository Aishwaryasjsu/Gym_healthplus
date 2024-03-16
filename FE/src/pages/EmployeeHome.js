import { Container } from '@mui/material';
import React from 'react';
import CheckInCheckOut from '../components/CheckInCheckout';
import EnrolledClasses from "../components/EnrolledClass";
import NavBar from '../components/EmployeeNavBar';

const EmployeeHome = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <CheckInCheckOut />
            </Container>
        </div>);
}
export default EmployeeHome;