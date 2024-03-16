import { Employee } from './model/employee.js';
import jwt from "../common/utils/jwt/index.js"

const createEmployee = async ({firstName, lastName, email, phoneNumber, password, address}) => {
    try {
        // const hashedPassword = jwt.hashPassword(password, jwt.createSalt());

        const employee = await Employee.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            address            
        });

        return  employee;
    } catch (err) {
        console.error('Error getting employee by email and password: ', err);
        throw err;
    }
}



const getEmployeeByEmailAndPassword = async (email, password) => {
    try {
        const employee = await Employee.findOne({
            where: {
                email: email,
                password: password
            }
        });
    if (!employee) {
            return null;
        }
     return employee;
    } catch (err) {
        console.error('Error getting employee by email and password: ', err);
        throw err;
    }
}


const employeeRepository = { createEmployee, getEmployeeByEmailAndPassword };

export default employeeRepository;