// Import the Sequelize module and the connection object
import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { sequelize } from '../../common/db/dbConnection.js';

// Define the employee model
const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    address: {
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

// Create the member table in the database
Employee.sync({ force: false })
    .then(() => {
        console.log('Employee table created successfully');
    })
    .catch((err) => {
        console.error('Error creating Employee table: ', err);
    });



export { Employee };