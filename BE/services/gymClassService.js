import pkg from 'lodash';
import gymClassRepository from '../repository/gymClassRepository.js';

const { isEmpty } = pkg;


const getAllByLocation = async (location) => {
    const getclassbyloc = await gymClassRepository.getGymClassesByLocation(location);
    return { getclassbyloc };
}

const enrollClass = async (memberId, classId) => {
    const data = await gymClassRepository.postEnrolledClass(memberId, classId);
    return { data: data };
}

const getEnrolledClass = async (memberId) => {
    const classes = await gymClassRepository.getEnrolledClass(memberId);
    return { classes };
}

const addClasses = async (payload) => {
    const classes = await gymClassRepository.postAddClasses(payload);
    if (isEmpty(classes)) {
        throw new AppError(ERROR_CODE.UNAUTHORIZED);
    }

    return { classes };
}

const getAll = async () => {
    const classes = await gymClassRepository.getAllClasses();
    return { classes };
}


const gymClassService = { getAllByLocation, getEnrolledClass, enrollClass, addClasses, getAll };

export default gymClassService;