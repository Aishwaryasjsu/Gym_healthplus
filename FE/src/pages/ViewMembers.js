import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/EmployeeNavBar';
import ViewMembersTable from '../components/ViewMembersTable';
import axios from 'axios';
import { config } from '../config';

const ViewMembers = () => {

    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchMembers() {
        const url = searchTerm
            ? `${config.BASE_URL}/members?name=${searchTerm}`
            : `${config.BASE_URL}/members`;
        const response = await axios.get(url);
        console.log("response.data", members);
        setMembers(response.data.members);
        console.log("members", members);
    }

    useEffect(() => {
        fetchMembers();
    }, [searchTerm]);

    function handleSearch(event) {
        event.preventDefault();
        fetchMembers();
    }

    return (
        <div>
            <NavBar />
            <Container>
                <div>
                    <h1>All Members:</h1>
                    <form onSubmit={handleSearch}>
                        <label>
                            Search by name:
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={event => setSearchTerm(event.target.value)}
                            />
                        </label>
                        <button type="submit">Search</button>
                    </form>
                    <ViewMembersTable members={members} />
                </div>
            </Container>
        </div>);
}
export default ViewMembers;