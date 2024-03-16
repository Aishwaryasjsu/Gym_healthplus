// Import the Sequelize module and the connection object
import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { sequelize } from '../../common/db/dbConnection.js';
import { Member } from './member.js';

// Define the Training logs model
const TrainingLogs = sequelize.define('TrainingLogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Member,
            key: 'id',
        },
    },
    treadmill: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weightlifting: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cycling: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
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

TrainingLogs.belongsTo(Member, {
    foreignKey: 'memberId',
});


// Create the TrainingLogs table in the database
TrainingLogs.sync({ alter: true })
    .then(() => {
        console.log('TrainingLogs table created successfully');
    })
    .catch((err) => {
        console.error('Error creating TrainingLogs table: ', err);
    });

export { TrainingLogs };