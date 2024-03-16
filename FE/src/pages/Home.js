import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavBar from '../components/Navbar';
import { HomeSlider } from '../components/HomeSlider';
import MembershipPlans from "../components/Membership";
import GymClasses from "../components/GymClasses";

const useStyles = styled((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <HomeSlider />
            <MembershipPlans />
            <GymClasses />
            <footer className={classes.footer}>
                <Typography variant="body2" component="p" align="center">Copyright © Gymbaroo
                    {new Date().getFullYear()}
                </Typography>
            </footer>
        </div>
    );
};

export default Home;
