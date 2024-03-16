import { TrainingLogs } from "./model/trainingLogs.js";
import { Member } from "./model/member.js";
import pkg from 'sequelize';
const { Op } = pkg;

const getTrainingLogsByMemberId = async (memberId) => {
  try {
    const logs = await TrainingLogs.findAll({
      where: {
        memberId: memberId,
      },
    });
    return logs;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving training logs by memberId");
  }
};

const checkInUser = async (
  memberId,
  location
) => {
  try {
    const data = await TrainingLogs.create({
      memberId: memberId,
      checkIn: new Date(),
      location: location,
    });
    return data;
  } catch (err) {
    console.error("Error checking in", err);
    throw err;
  }
};

const getCheckedInUsers = async (
  location
) => {
  try {
    const data = await TrainingLogs.findAll({
      where: {
        checkOut: null,
      },
      include: [Member],
    });
    return data;
  } catch (err) {
    console.error("Error checking in", err);
    throw err;
  }
};

const updateTrainingLogs = async (id, treadmill, weightlifting, cycling) => {
  try {
    const data = await TrainingLogs.update({
      treadmill: treadmill,
      weightlifting: weightlifting,
      cycling: cycling,
    }, {
      where: {
        id: id,
      },
    });
    return data;
  } catch (err) {
    console.error("Error updating training logs", err);
    throw err;
  }
}

const checkOut = async (sessionId) => {
  try {
    const data = await TrainingLogs.update({
      checkOut: new Date(),
    }, {
      where: {
        id: sessionId
      },
    });
    return data;
  } catch (err) {
    console.error("Error updating chcekout time", err);
    throw err;
  }
}

const getTrainingLogsByFilter = async (startDate, endDate, location, memberId = null) => {
  try {
    const whereCondition = {
      checkIn: {
        [Op.gte]: startDate,
      },
      checkOut: {
        [Op.lte]: endDate,
      },
      location,
    };

    if (memberId) {
      whereCondition.memberId = memberId;
    }

    const trainingLogs = await TrainingLogs.findAll({
      where: whereCondition,
    });

    return trainingLogs;
  } catch (error) {
    console.error('Error retrieving training logs: ', error);
    throw new Error('Error retrieving training logs');
  }
};


const trainingLogsRepository = {
  getTrainingLogsByMemberId,
  checkInUser,
  getCheckedInUsers,
  updateTrainingLogs,
  checkOut,
  getTrainingLogsByFilter
};

export default trainingLogsRepository;
