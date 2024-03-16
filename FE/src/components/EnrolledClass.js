
import React, { useState, useEffect } from 'react';
import { getUser } from '../util';
import "../css/EnrolledClass.css"; // Import the CSS file
import { formatDate, formatTime } from '../util';
import { config } from '../config';

const EnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = getUser();
            const memberId = user.id;
            const response = await fetch(`${config.BASE_URL}/classes/getEnrolledClass?memberId=${memberId}`);
            const data = await response.json();
            setEnrolledClasses(data.classes);
        };
        // Add more enrolled classes here
        fetchData();
    }, []);

    return (
        <div>
            <h2 className='title'>Enrolled Classes</h2>
            <div className='classes'>
                {enrolledClasses.map((enrolledClass) => (
                    <div key={enrolledClass.id} className="card">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{enrolledClass.name}</td>
                                </tr>
                                <tr>
                                    <td>Instructor:</td>
                                    <td>{enrolledClass.instructor}</td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td>{formatDate(enrolledClass.startdate)}</td>
                                </tr>
                                <tr>
                                    <td>Start Time:</td>
                                    <td>{formatTime(enrolledClass.startdate)}</td>
                                </tr>
                                <tr>
                                    <td>End Time:</td>
                                    <td>{formatTime(enrolledClass.enddate)}</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>{enrolledClass.location}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                ))}</div>
        </div>
    );
};

export default EnrolledClasses;
