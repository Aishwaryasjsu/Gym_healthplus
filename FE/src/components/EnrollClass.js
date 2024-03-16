
import React, { useState, useEffect } from 'react';
import "../css/EnrolledClass.css"; // Import the CSS file
import Button from 'react-bootstrap/Button';
import { formatDate, formatTime, getUser } from '../util';
import axios from 'axios';
import { Grid } from '@mui/material';
import { config } from '../config';
import { useNavigate } from 'react-router-dom';
import routes from '../util/routes';

const EnrollClass = () => {
    const [classes, setclasses] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [error, setError] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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


    const fetchClasses = async (location) => {
        const user = getUser();
        const memberId = user.id;
        const response = await fetch(`${config.BASE_URL}/classes/getAllClassesByLocation?location=${location}`);
        const data = await response.json();
        setclasses(data.getclassbyloc);
        console.log(data.getclassbyloc)
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
        fetchClasses(e.target.value);
    };


    const enrollInClass = (classId) => {
        setLoading(true);
        setSelectedClass(classId);
        const user = getUser();
        const memberId = user.id;
        axios
            .post(`${config.BASE_URL}/classes/postEnrolledClass`, {
                memberId,
                classId,
            })
            .then((response) => {
                setSelectedClass('');
                navigate(routes.memberHome);
                setLoading(false);
            })
            .catch((error) => {
                if (error.response && error.response.status === 409) {
                    setError('Already enrolled in the class');
                } else {
                    setError('An error occurred while enrolling in the class');
                }
                setLoading(false);
            });
    };


    return (
        <div>
            <Grid container spacing={2} display='flex' alignItems='baseline'>
                <Grid item xs={8}>
                    <h2 className='title'>Classes</h2>
                </Grid>
                <Grid item xs={4} >
                    <select value={selectedLocation} onChange={handleLocationChange} className="login-input" style={{ border: '1px Solid' }}>
                        <option>
                            Slect a location
                        </option>
                        {locations.map((location) => (
                            <option key={location.name} value={location.name}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </Grid>
            </Grid>
            <div className='classes'>
                {classes?.map((cl) => (
                    <div key={cl.id} className="card">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{cl.name}</td>
                                </tr>
                                <tr>
                                    <td>Instructor:</td>
                                    <td>{cl.instructor}</td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td>{formatDate(cl.startdate)}</td>
                                </tr>
                                <tr>
                                    <td>Start Time:</td>
                                    <td>{formatTime(cl.startdate)}</td>
                                </tr>
                                <tr>
                                    <td>End Time:</td>
                                    <td>{formatTime(cl.enddate)}</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>{cl.location}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        {selectedClass == cl.id && error ? <div>{error}</div> :
                                            <Button className="btn" onClick={() => { enrollInClass(cl.id) }}>{loading ? "Enrolling...." : 'Enroll'}</Button>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                ))}</div>
        </div>
    );
};

export default EnrollClass;
