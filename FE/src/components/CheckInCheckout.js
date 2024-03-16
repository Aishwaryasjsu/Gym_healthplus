import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../config';
import { formatTime } from '../util';
import CheckedInUsersTable from '../components/CheckedInUsersTable';
import { Box, Grid } from '@mui/material';
import { Button } from 'react-bootstrap';


const CheckInCheckOut = () => {
    const [memberId, setMemberId] = useState('');
    const [checkedInUsers, setCheckedInUsers] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/locations`);
            console.log({ response });
            setLocations(response.data.locations);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCheckedInUsers = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/getCheckedInUser`);
            console.log({ response });
            setCheckedInUsers(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCheckIn = async () => {
        try {
            await axios.post(`${config.BASE_URL}/checkin`, { memberId, location: selectedLocation });
            setMemberId('');
            fetchCheckedInUsers();
        } catch (error) {
            console.error(error);
        }
    };

    const handleCheckout = async (checkedInId) => {
        try {
            await axios.post(`${config.BASE_URL}/checkout/${checkedInId}`);
            fetchCheckedInUsers();
        } catch (error) {
            console.error(error);
        }
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
        fetchCheckedInUsers();
    };


    return (
        <Box>
            <Grid textAlign='end'>
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option>
                        Slect a value
                    </option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.name}>
                            {location.name}
                        </option>
                    ))}
                </select>
            </Grid>
            <Box sx={{ flexGrow: 1 }} my={2}>
                <Grid container spacing={2} display='flex' alignItems='center'>
                    <Grid item xs={4} textAlign='initial'>
                        <h2 style={{ fontWeight: 'bold' }}>Check In</h2>
                    </Grid>
                    <Grid item xs={4}>
                        <input type="text" value={memberId} onChange={(e) => setMemberId(e.target.value)} placeholder="Member ID" />
                    </Grid>
                    <Grid item xs={4} textAlign='end'>
                        <Button variant='outlined' onClick={handleCheckIn} disabled={!memberId || !selectedLocation} >Check In</Button>
                    </Grid>
                </Grid>
            </Box>
            <Grid textAlign='initial'>
                <h2 style={{ fontWeight: 'bold' }}>Checked In Members</h2>
            </Grid>
            {checkedInUsers.length === 0 ? (
                <p>No users currently checked in.</p>
            ) : (
                <CheckedInUsersTable data={checkedInUsers} handleCheckout={handleCheckout} />
            )}
        </Box>
    );
};

export default CheckInCheckOut;
