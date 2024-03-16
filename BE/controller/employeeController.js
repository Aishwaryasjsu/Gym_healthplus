import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import employeeService from "../services/employeeService.js";

const signup = async (request, response) => {
    const result = await employeeService.signup(request.body);
    response.status(http.StatusCode.OK).json(result);
};

const login = async (request, response) => {
    const { email, password } = request.body;
    const result = await employeeService.login(email, password);
    response.status(http.StatusCode.OK).json(result);
};


const employeeController = wrapAsync({
    signup,
    login
});

export default employeeController;

