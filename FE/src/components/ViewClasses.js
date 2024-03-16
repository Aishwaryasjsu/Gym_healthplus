import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../config';
import { formatTime } from '../util';
import ViewClassTable from '../components/ViewClassTable';
import { Box, Grid } from '@mui/material';
import { Button } from 'react-bootstrap';


const CheckInCheckOut = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/classes`); // Replace 'API_URL' with your actual API endpoint
            setClasses(response.data.classes);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };
    return (
        <Box>

            <Grid textAlign='initial'>
                <h2 style={{ fontWeight: 'bold' }}>All Upcoming Classes</h2>
            </Grid>
            {classes.length === 0 ? (
                <p>No users currently checked in.</p>
            ) : (
                <ViewClassTable data={classes} />
            )}
        </Box>
    );
};

export default CheckInCheckOut;
