import { Container } from '@mui/material';
import React from 'react';
import AddClass from '../components/AddClass';
import  NavBar  from '../components/EmployeeNavBar';

const addMember = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <AddClass />
            </Container>
        </div>);
}
export default addMember;