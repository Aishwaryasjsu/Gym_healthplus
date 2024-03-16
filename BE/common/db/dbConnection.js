import pkg from 'sequelize';
const { Sequelize } = pkg;


console.log('process.env.DB_USER: ', process.env.DB_USER);
console.log('process.env.DB_PASSWORD: ', process.env.DB_PASSWORD);
console.log('process.env.DB_NAME: ', process.env.DB_NAME);
console.log('process.env.DB_PORT: ', process.env.DB_PORT);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDialect = process.env.DB_DBD;
// Define the connection details
// process.exit();

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test the database connection
// sequelize.authenticate()
//     .then(() => {
//         console.log('Successfully connected to database');
//     })
//     .catch((err) => {
//         console.error('Error connecting to database: ', err);
//     });

// Export the connection object
