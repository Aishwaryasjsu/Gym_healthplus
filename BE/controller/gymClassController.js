import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import gymClassService from "../services/gymClassService.js";

//getclasseslocationwise
const getAllClassesByLocation = async (request, response) => {
    const { location } = request.query;
    const result = await gymClassService.getAllByLocation(location);
    response.status(http.StatusCode.OK).json(result);
};

const getEnrolledClass = async (request, response) => {
    const { memberId } = request.query;
    const result = await gymClassService.getEnrolledClass(memberId);
    response.status(http.StatusCode.OK).json(result);
};

//posting data in enrolledclasses table
const postEnrolledClass = async (request, response) => {
    const { memberId, classId } = request.body;
    const result = await gymClassService.enrollClass(memberId, classId);
    response.status(http.StatusCode.OK).json(result);
};

//adding classes by employee
const addClasses = async (request, response) => {
    const result = await gymClassService.addClasses(request.body);
    response.status(http.StatusCode.OK).json(result);
};

const getAllClasses = async (request, response) => {
    const result = await gymClassService.getAll();
    response.status(http.StatusCode.OK).json(result);
};


const gymClassController = wrapAsync({
    getAllClassesByLocation,
    postEnrolledClass,
    getEnrolledClass,
    addClasses,
    getAllClasses
});

export default gymClassController;

