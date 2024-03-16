import pkg from 'lodash';
import { AppError } from "../common/utils/error/AppError.js";
import { ERROR_CODE } from "../common/enums/errorCode.js";
import jwt from "../common/utils/jwt/index.js";
import employeeRepository from "../repository/employeeRepository.js";

const { isEmpty } = pkg;


const signup = async (payload) => {

    const employee = await employeeRepository.createEmployee(payload);
    if (isEmpty(employee)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }
    const token = jwt.signJWT(employee);
    return { token, user: employee };
}


const login = async (email, password) => {

    const employee = await employeeRepository.getEmployeeByEmailAndPassword(email, password);
    if (isEmpty(employee)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }
    const token = jwt.signJWT(employee);
    return { token, user: employee };
}




const employeeService = { signup, login };

export default employeeService;