import React, { useState, useEffect } from 'react';
import { getUser } from '../util';
import "../css/MemberProfile.css";
import NavBar from '../components/Navbar';
import { config } from '../config';

const MemberProfile = () => {

    const [member, setMember] = useState([]);
    const [membership, setMembership] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const user = getUser();
            const memberId = user.id;
            const response = await fetch(`${config.BASE_URL}/members/profile?memberId=${memberId}`);
            const data = await response.json();
            setMember(data.memberDetails.member)
            setMembership(data.memberDetails.membership);
        };
        // Add more enrolled classes here
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="card">
                <div className="card-header">
                    <h2>Member Profile</h2>
                </div>
                <div className="card-body">
                    <h3>{member.firstName} {member.lastName}</h3>
                    <p>Email: {member.email}</p>
                    <p>Phone Number: {member.phoneNumber}</p>
                    <p>Address: {member.address}</p><br></br>
                    <h3>Membership Details</h3>
                    <p>Membership Name: {membership.name}</p>
                    <p>Membership Type: {membership.type}</p>
                    <p>Membership Fee: {membership.fee}</p>
                    <p>Membership Description: {membership.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
