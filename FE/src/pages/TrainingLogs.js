import React, { useState, useEffect } from 'react';
import { getUser } from '../util';
import NavBar from '../components/Navbar';
import "../css/EnrolledClass.css"; // Import the CSS file
import { formatDate, formatTime } from '../util';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { config } from '../config';

export const TrainingLogs = () => {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = getUser();
            const memberId = user.id;
            const response = await fetch(`${config.BASE_URL}/logs/getByMemberId?memberId=${memberId}`);
            const data = await response.json();
            setLogs(data.logs)
        };
        // Add more enrolled classes here
        fetchData();
    }, []);

    const [dateFilter, setDateFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');

    const [treadmill, setTreadmill] = useState(0);
    const [weightlift, setWeightlift] = useState(0);
    const [cycling, setCycling] = useState(0);

    const filteredLogs = logs.filter((log) => {
        const dateMatch = formatDate(log.checkIn).includes(dateFilter);
        const locationMatch = log.location.toLowerCase().includes(locationFilter.toLowerCase());

        return dateMatch && locationMatch;
    });

    const handleDateFilterChange = (event) => {
        setDateFilter(event.target.value);
    };

    const handleLocationFilterChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const postLogs = async (logId) => {
        try {
            const response = await axios.put(`${config.BASE_URL}/logs/${logId}`, {
                treadmill: treadmill,
                weightlifting: weightlift,
                cycling: cycling,
            });
            alert("Data logged!")
            return response.data;
        } catch (error) {
            console.error('Error updating log:', error);
            throw error;
        }
    }

    return (
        <div>
            <div>
                <NavBar />
                <h2 className='title'>Training Logs</h2><br></br>
                <div className='filters'>
                    <div>
                        <label htmlFor="dateFilter">Date:</label>
                        <input
                            type="text"
                            id="dateFilter"
                            value={dateFilter}
                            onChange={handleDateFilterChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="locationFilter">Location:</label>
                        <input
                            type="text"
                            id="locationFilter"
                            value={locationFilter}
                            onChange={handleLocationFilterChange}
                        />
                    </div>
                </div>
                <div className='classes'>
                    {filteredLogs.map((log) => (
                        <div key={log.id} className="card">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>treadmill:</td>
                                        <td>{formatDate(log.checkIn) == formatDate(new Date()) ? <input
                                            type="text"
                                            placeholder={log.treadmill}
                                            // value={log.treadmill}
                                            onChange={(e) => setTreadmill(e.target.value)}
                                        /> : log.treadmill} minutes
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>weightlifting:</td>
                                        <td>{formatDate(log.checkIn) == formatDate(new Date()) ? <input
                                            type="text"
                                            placeholder={log.weightlifting}
                                            onChange={(e) => setWeightlift(e.target.value)}
                                        /> : log.weightlifting} minutes</td>
                                    </tr>
                                    <tr>
                                        <td>cycling:</td>
                                        <td>{formatDate(log.checkIn) == formatDate(new Date()) ? <input
                                            type="text"
                                            placeholder={log.cycling}
                                            onChange={(e) => setCycling(e.target.value)}
                                        /> : log.cycling} minutes</td>
                                    </tr>
                                    <tr>
                                        <td>Date:</td>
                                        <td>{formatDate(log.checkIn)}</td>
                                    </tr>
                                    <tr>
                                        <td>Check In:</td>
                                        <td>{formatTime(log.checkIn)}</td>
                                    </tr>
                                    <tr>
                                        <td>Check Out:</td>
                                        <td>{formatTime(log.checkOut)}</td>
                                    </tr>
                                    <tr>
                                        <td>Location:</td>
                                        <td>{log.location}</td>
                                    </tr>
                                    <tr>
                                        {formatDate(log.checkIn) == formatDate(new Date()) ?
                                            <td colSpan="2" className="text-center">
                                                <Button onClick={() => postLogs(log.id)} className="btn">Log data</Button>
                                            </td> : null}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TrainingLogs;
