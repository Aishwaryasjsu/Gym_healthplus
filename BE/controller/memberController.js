
import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import memberService from "../services/memberService.js";

const signup = async (request, response) => {
    const result = await memberService.signup(request.body);
    response.status(http.StatusCode.OK).json(result);
};

const login = async (request, response) => {
    const { email, password } = request.body;
    const result = await memberService.login(email, password);
    response.status(http.StatusCode.OK).json(result);
};

const getMemberDetails = async (request, response) => {
    const { memberId } = request.query;
    const result = await memberService.getMemberDetails(memberId);
    response.status(http.StatusCode.OK).json(result);
};

const getAllMembers = async (request, response) => {
    const result = await memberService.getAllMembers();
    response.status(http.StatusCode.OK).json(result);
}

const getMemberActivities = async (request, response) => {
    const result = await memberService.getMemberActivities(request.query);
    response.status(http.StatusCode.OK).json(result);
}

const memberController = wrapAsync({
    signup,
    login,
    getMemberDetails,
    getAllMembers,
    getMemberActivities
});

export default memberController;

