import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import membershipService from "../services/membershipService.js";


const getAllmembershipdetail = async (request, response) => {
    // const { location } = request.query;
    const result = await membershipService.GetAllMembershipdetails(request);
    response.status(http.StatusCode.OK).json(result);
};

//adding new memberships done by employee
const addMembership = async (request, response) => {
    const result = await membershipService.addMembership(request.body);
    response.status(http.StatusCode.OK).json(result);
};

const membershipController = wrapAsync({
    getAllmembershipdetail,
    addMembership
});

export default membershipController;

