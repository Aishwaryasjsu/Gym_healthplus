// Import the Sequelize module and the connection object
import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from '../../common/db/dbConnection.js';

// Define the employee model
const Location = sequelize.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Create the member table in the database
Location.sync({ alter: true })
    .then(() => {
        console.log('Location table created successfully');
    })
    .catch((err) => {
        console.error('Error creating Location table: ', err);
    });



export { Location };