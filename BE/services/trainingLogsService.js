import pkg from 'lodash';
import trainingLogsRepository from '../repository/trainingLogsRepository.js';
const { isEmpty } = pkg;

const getTrainingLogsByMemberId = async (memberId) => {
    const logs = await trainingLogsRepository.getTrainingLogsByMemberId(memberId);
    return { logs };
}


const checkIn = async (memberId, location) => {
    const data = await trainingLogsRepository.checkInUser(memberId, location);
    return { data };
}

const getCheckedInUser = async (location) => {
    const data = await trainingLogsRepository.getCheckedInUsers(location);
    return { data };
}

const updateTrainingLogs = async (id, body) => {
    const { treadmill, weightlifting, cycling } = body;
    const result = await trainingLogsRepository.updateTrainingLogs(id, treadmill, weightlifting, cycling);
    return result;
};

const checkOut = async (sessionId) => {
    const data = await trainingLogsRepository.checkOut(sessionId);
    return { data };
}


const trainingLogsService = { getTrainingLogsByMemberId, checkIn, getCheckedInUser, updateTrainingLogs, checkOut };

export default trainingLogsService;