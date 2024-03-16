import pkg from 'lodash';
import { AppError } from "../common/utils/error/AppError.js";
import { ERROR_CODE } from "../common/enums/errorCode.js";
import jwt from "../common/utils/jwt/index.js";
import memberRepository from "../repository/memberRepository.js";
import gymClassRepository from '../repository/gymClassRepository.js';
import trainingLogsRepository from '../repository/trainingLogsRepository.js';

const { isEmpty } = pkg;


const signup = async (payload) => {

    const member = await memberRepository.createMember(payload);
    if (isEmpty(member)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }
    const token = jwt.signJWT(member);
    return { token, user: member };
}


const login = async (email, password) => {

    const member = await memberRepository.getByEmailAndPassword(email, password);
    if (isEmpty(member)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }
    const token = jwt.signJWT(member);
    return { token, user: member };
}


const getMemberDetails = async (memberId) => {

    const memberDetails = await memberRepository.getMemberDetails(memberId);
    if (isEmpty(memberId)) {
        throw new AppError(ERROR_CODE.NOT_FOUND);
    }
    return { memberDetails };
}

const getAllMembers = async (memberId) => {
    const members = await memberRepository.getAllMembers();
    return { members };
}

// async function testGetEnrolledClasses() {
//     try {
//         const startDate = new Date('2023-05-01');
//         const endDate = new Date('2023-05-31');
//         const location = 'Sunnyvale';
//         const memberId = "1";

//         const enrolledClasses = await gymClassRepository.getEnrolledClassesbyFilter(startDate, endDate, location, memberId);

//         console.log('Enrolled Classes:', enrolledClasses);
//         enrolledClasses.forEach((enrolledClass) => {
//             console.log(`Member ID: ${enrolledClass.memberId}`);
//             console.log(`Class ID: ${enrolledClass.classId}`);
//             console.log(`Start Date: ${enrolledClass.GymClass.startdate}`);
//             console.log(`End Date: ${enrolledClass.GymClass.enddate}`);
//             console.log(`Location: ${enrolledClass.GymClass.location}`);
//             console.log('---------------------');
//         });
//     } catch (error) {
//         console.error('Error testing getEnrolledClasses:', error);
//     }
// }

function getUniqueMemberIds(enrolledClasses) {
    const memberIds = enrolledClasses.map((enrolledClass) => enrolledClass.memberId);
    const uniqueMemberIds = [...new Set(memberIds)];
    return uniqueMemberIds;
}

function mergeUniqueArray(arr1, arr2) {
    const mergedSet = new Set([...arr1, ...arr2]);
    const mergedArray = [...mergedSet];
    return mergedArray;
}



const getMemberActivities = async ({ startDate, endDate, location, memberId }) => {
    //fetch all enrolled classes within date range and location and memberId if provided
    // await testGetEnrolledClasses();

    // const startDate = new Date('2023-05-01');
    // const endDate = new Date('2023-05-31');
    // const location = 'Sunnyvale';
    // const memberId = "1";
    console.log(startDate, endDate, location, memberId);

    const enrolledClasses = await gymClassRepository.getEnrolledClassesbyFilter(startDate, endDate, location, memberId);


    //fetch all the training logs within date range and location and memberId if provided
    const trainingLogs = await trainingLogsRepository.getTrainingLogsByFilter(startDate, endDate, location, memberId);


    const member = await memberRepository.getMemberById(memberId);
    return { member, trainingLogs, enrolledClasses };
}

const memberService = { signup, login, getMemberDetails, getAllMembers, getMemberActivities };

export default memberService;