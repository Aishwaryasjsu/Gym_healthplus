import { sequelize } from "../common/db/dbConnection.js";
export const handleDbConnection = async (
    request,
    response,
    next
) => {
    if (process.env.environment !== 'test') {
        try {
            await sequelize.authenticate();
            console.log('Connection to the database has been established successfully.');
        } catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }
    next();
};
