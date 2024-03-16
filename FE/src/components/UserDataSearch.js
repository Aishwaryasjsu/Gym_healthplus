import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../config';
import { isEmpty } from 'lodash';
import { Container, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const UserDataSearch = () => {
    const [memberId, setMemberId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [locations, setLocations] = useState([]);
    const [userData, setUserData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLocations();
    }, []);


    function calculateTimeDifference(trainingLogs) {
        let diffInMilliseconds = 0;

        trainingLogs.forEach(log => {
            diffInMilliseconds += Math.abs(new Date(log.checkIn) - new Date(log.checkOut));
        });
        const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} hours ${remainingMinutes} minutes`;
    }

    function checkFieldsNotEmpty() {
        if (!memberId || !startDate || !endDate || !selectedLocation) {
            return false;
        }
        return true;
    }

    const handleSearch = async () => {
        if (!checkFieldsNotEmpty()) { setError('Please fill out all fields'); return; }
        try {
            const response = await axios.get(`${config.BASE_URL}/members/activities`, {
                params: {
                    memberId,
                    startDate,
                    endDate,
                    location: selectedLocation,
                },
            });
            setUserData(response.data);
            setError('');
        } catch (error) {
            setError(error.response.data.message);
            console.error('Error fetching user data:', error);
        }
    };

    const fetchLocations = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/locations`);
            console.log({ response });
            setLocations(response.data.locations);
        } catch (error) {
            console.error(error);
        }
    };





    return (
        <Container style={{ marginTop: '22px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item>
                        <input
                            type="text"
                            value={memberId}
                            placeholder="Enter Member Id"
                            onChange={(e) => setMemberId(e.target.value)}
                        />

                    </Grid>
                    <Grid item>
                        <label>
                            Start Date:
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </label>
                    </Grid>
                    <Grid item>
                        <label>
                            End Date:
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </label>
                    </Grid>
                    <Grid item>
                        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="login-input">
                            <option>
                                Select Location
                            </option>
                            {locations?.map((location) => (
                                <option key={location.name} value={location.name}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </Grid>
                    <Grid item>
                        <button onClick={handleSearch}>Search</button>
                    </Grid>
                </Grid>
                <Grid>
                    {error}
                </Grid>
            </Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell align="right">Enrolled Classes</StyledTableCell>
                            <StyledTableCell align="right">Hours Spent in Gym</StyledTableCell>
                            <StyledTableCell align="right">Total Visits</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!isEmpty(userData) &&
                            <TableRow key={userData.member.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {`${userData.member.firstName} ${userData.member.lastName}`}
                                </TableCell>
                                <TableCell align="right">{userData.enrolledClasses.length}</TableCell>
                                <TableCell align="right">{calculateTimeDifference(userData.trainingLogs)}</TableCell>
                                <TableCell align="right">
                                    {userData.trainingLogs?.length}
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default UserDataSearch;
