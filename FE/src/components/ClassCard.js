import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { config } from '../config';

export const ClassCard = () => {

    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${config.BASE_URL}/getMembership`);
            const data = await response.json();
            setMemberships(data.membership);
        };
        // Add more enrolled classes here
        fetchData();
    }, []);

    return (
        <div className="row">
            {memberships?.map((m) => (
                <Card className="membership-card">
                    <Card.Body>
                        <Card.Title className="membership-card-title">
                            {m.name}
                        </Card.Title>
                        <Card.Subtitle className="membership-card-subtitle">
                            {m.type}
                        </Card.Subtitle>
                        <Card.Text>
                            {m.fee}
                        </Card.Text>
                        <Card.Text className="membership-card-text">
                            {m.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>))}
        </div >
    );
}