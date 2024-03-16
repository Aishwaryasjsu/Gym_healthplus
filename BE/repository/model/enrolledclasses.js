// Import the Sequelize module and the connection object
import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;
import { sequelize } from '../../common/db/dbConnection.js';
import { GymClass } from './gymClass.js';
import { Member } from './member.js';

// Define the GymClass model
const EnrolledClasses = sequelize.define('EnrolledClasses', {
    memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Member,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: GymClass,
            key: 'id'
        }
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

EnrolledClasses.belongsTo(GymClass, { foreignKey: 'classId' });
GymClass.hasMany(EnrolledClasses, { foreignKey: 'classId' });

EnrolledClasses.belongsTo(Member, { foreignKey: 'memberId' });
Member.hasMany(EnrolledClasses, { foreignKey: 'memberId' });
// Create the gymclass table in the database
EnrolledClasses.sync({ alter: true })
    .then(() => {
        console.log('EnrolledClasses table created successfully');
    })
    .catch((err) => {
        console.error('Error creating EnrolledClasses table: ', err);
    });


export { EnrolledClasses };