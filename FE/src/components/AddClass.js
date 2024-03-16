import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { combineDateTime, setLocalStorage } from '../util';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { config } from '../config';
import routes from '../util/routes';

const AddClass = () => {
    const [name, setName] = useState('');
    const [instructor, setInstructor] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    const { state } = useLocation();
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

    const handleAddClass = () => {
        setLoading(true);

        const classData = {
            name,
            instructor,
            startdate: combineDateTime(date, startTime),
            enddate: combineDateTime(date, endTime),
            location: selectedLocation
        };

        axios.post(`${config.BASE_URL}/employee/addclasses`, classData)
            .then(response => {
                if (response.status === 200) {
                    setError('');
                    setDate('');
                    setEndTime('');
                    setStartTime('');
                    setName('');
                    setInstructor('');
                    selectedLocation('');
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setError(error.response.data.message);
            });
    };


    return (
        <div className="login-page">
            <form className="login-form">
                <h2 className="login-title">Add A New Class!</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Instructor"
                    value={instructor}
                    onChange={(event) => setInstructor(event.target.value)}
                    className="login-input"
                />
                <input
                    type="time"
                    placeholder="Start Time"
                    value={startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                    className="login-input"
                />
                <input
                    type="time"
                    placeholder="End Time"
                    value={endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                    className="login-input"
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(event) => { setDate(event.target.value) }}
                    className="login-input"
                />
                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="login-input">
                    <option>
                        Slect Location
                    </option>
                    {locations.map((location) => (
                        <option key={location.name} value={location.name}>
                            {location.name}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    className="login-button"
                    onClick={handleAddClass}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Add Class'}
                </button>
                {isEmpty(error) || <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
};

export default AddClass;
