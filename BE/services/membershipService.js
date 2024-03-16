import pkg from 'lodash';
import membershipRepository from '../repository/membershipRepository.js';

const { isEmpty } = pkg;


const GetAllMembershipdetails = async () => {
    const membership = await membershipRepository.getAllMembership();
    return { membership };
}

//adding memberships done by employee
const addMembership = async (payload) => {
    const classes = await membershipRepository.addMembership(payload);
    if (isEmpty(classes)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }
    
    return {classes };
}

const membershipService = { GetAllMembershipdetails,addMembership };

export default membershipService;