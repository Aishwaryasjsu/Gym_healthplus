// Import the Sequelize module and the connection object
import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { sequelize } from '../../common/db/dbConnection.js';

// Define the GymClass model
const GymClass = sequelize.define('GymClass', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startdate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    enddate: {
        type: DataTypes.DATE,
        allowNull: true,

    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
    }
});

// Create the gymclass table in the database
GymClass.sync({ force: false })
    .then(() => {
        console.log('GymClass table created successfully');
    })
    .catch((err) => {
        console.error('Error creating GymClass table: ', err);
    });


export { GymClass };