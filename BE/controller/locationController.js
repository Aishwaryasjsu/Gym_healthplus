import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import locationService from "../services/locationService.js";

const getAll = async (request, response) => {
    const result = await locationService.getAll();
    response.status(http.StatusCode.OK).json(result);
};


const employeeController = wrapAsync({
    getAll
});

export default employeeController;

