import React, { useState, useEffect } from 'react';
import "../css/SignIn.css"; // Import the CSS file
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { setLocalStorage } from '../util';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { config } from '../config';
import routes from '../util/routes';




const SignupMember = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [membershipId, setMembershipId] = useState('');
    const [password, setPassword] = useState('');
    const [memberships, setMemberships] = useState([]);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch memberships
        axios.get(`${config.BASE_URL}/getMembership`)
            .then(response => {
                setMemberships(response.data.membership);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSignup = () => {
        setLoading(true);

        const memberData = {
            firstName,
            lastName,
            email,
            address,
            phoneNumber,
            password,
            membershipId
        };

        axios.post(`${config.BASE_URL}/members/signup`, memberData)
            .then(response => {
                if (response.status === 200) {
                    setError('');
                    setFirstName('');
                    setLastName('');
                    setPhoneNumber('');
                    setEmail('');
                    setAddress('');
                    setPassword('');
                    setMembershipId('');
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
            <form className="login-form" >
                <h2 className="login-title">Add A new  Member!</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className="login-input"
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="login-input"
                />
                <select
                    value={membershipId}
                    onChange={(event) => setMembershipId(event.target.value)}
                    className="login-input"
                >
                    <option value="">Select Membership</option>
                    {memberships.map(membership => (
                        <option key={membership.id} value={membership.id}>{membership.name}</option>
                    ))}
                </select>
                <button
                    type="button"
                    className="login-button"
                    onClick={handleSignup}
                    disabled={loading}
                >
                    Add Member</button>
            </form>
        </div>
    );
};

export default SignupMember;
