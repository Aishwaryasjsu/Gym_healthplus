import pkg from 'sequelize';
const { Sequelize, sequelize, DataTypes, Op } = pkg;
import { GymClass } from './model/gymClass.js';
import { EnrolledClasses } from './model/enrolledclasses.js';
import { literal } from 'sequelize';
import { AppError } from '../common/utils/error/AppError.js';
import { ERROR_CODE } from '../common/enums/errorCode.js';


const getGymClassesByLocation = async (location) => {
  try {
    const classes = await GymClass.findAll({
      where: {
        location: location
      }
    });
    return classes;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving gym classes by location');
  }
}

const getEnrolledClass = async (memberId) => {
  try {
    const EnrolledClass = await EnrolledClasses.findAll({
      attributes: ['classId'],
      where: {
        memberId: memberId
      }

    });

    const classIds = EnrolledClass.map((enrolledClass) => enrolledClass.classId);

    const classDetails = await GymClass.findAll({
      where: {
        id: classIds
      }
    });

    return classDetails;
  } catch (error) {
    console.error('Error retrieving enrolledClass  details:', error);
    throw error;
  }
};

const postEnrolledClass = async (memberId, classId) => {
  try {
    const enrolledClass = await EnrolledClasses.create({
      memberId, classId
    });
    return enrolledClass;
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      throw new AppError(ERROR_CODE.CONFLICT);
    }
    console.error('Error posting MemberClass data: ', err);
    throw err;
  }
}

const postAddClasses = async ({ name, instructor, startdate, enddate, location }) => {
  try {
    const classes = await GymClass.create({
      name,
      instructor,
      startdate: new Date(startdate),
      enddate: new Date(enddate),
      location

    });

    return classes;
  } catch (err) {
    console.error('Error in posting data to gymclasses table: ', err);
    throw err;
  }
}

const getAllClasses = async () => {
  try {
    const currentDate = new Date();
    const classes = await GymClass.findAll({
      where: literal(`startdate > '${currentDate.toISOString()}'`),
    });
    return classes;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving gym classes');
  }
}

const getEnrolledClassesbyFilter = async (startDate, endDate, location, memberId = null) => {
  try {
    const whereCondition = {
    };

    if (memberId) {
      whereCondition.memberId = memberId;
    }

    const enrolledClasses = await EnrolledClasses.findAll({
      where: whereCondition,
      include: [
        {
          model: GymClass,
          required: true,
          where: {
            startdate: {
              [Op.gte]: startDate,
            },
            enddate: {
              [Op.lte]: endDate,
            },
            location
          },
        }
      ]
    });

    return enrolledClasses;
  } catch (error) {
    console.error('Error retrieving enrolled classes:', error);
    throw new Error('Error retrieving enrolled classes');
  }
};

const gymClassRepository = { getGymClassesByLocation, postEnrolledClass, getEnrolledClass, postAddClasses, getAllClasses, getEnrolledClassesbyFilter };

export default gymClassRepository;