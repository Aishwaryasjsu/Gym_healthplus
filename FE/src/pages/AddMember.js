import { Container } from '@mui/material';
import React from 'react';
import SignupMember from '../components/SignupMember';
import NavBar from '../components/EmployeeNavBar';

const addMember = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <SignupMember />
            </Container>
        </div>);
}
export default addMember;