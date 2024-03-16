import http from "../common/enums/http.js";
import { wrapAsync } from "../common/utils/error/wrapAsync.js";
import trainingLogsService from "../services/trainingLogsService.js";

const getTrainingLogsByMemberId = async (request, response) => {
  const { memberId } = request.query;
  const result = await trainingLogsService.getTrainingLogsByMemberId(memberId);
  response.status(http.StatusCode.OK).json(result);
};

const checkIn = async (request, response) => {
  const { memberId, location } = request.body;
  const result = await trainingLogsService.checkIn(memberId, location);
  response.status(http.StatusCode.OK).json(result);
};

const getCheckedInUser = async (request, response) => {
  const { location } = request.query;
  const result = await trainingLogsService.getCheckedInUser(location);
  response.status(http.StatusCode.OK).json(result);
}
const updateTrainingLogs = async (request, response) => {
  const id = request.params.logId;
  await trainingLogsService.updateTrainingLogs(id, request.body);
  response.status(http.StatusCode.OK).json({ message: "Training log updated successfully" });
}

const checkOut = async (request, response) => {
  const sessionId = request.params.logId;
  console.log({ sessionId });
  await trainingLogsService.checkOut(sessionId);
  response.status(http.StatusCode.OK).json({ message: "chcekout time updated successfully" });
};

const trainingLogsController = wrapAsync({
  getTrainingLogsByMemberId,
  checkIn,
  getCheckedInUser,
  updateTrainingLogs,
  checkOut
});

export default trainingLogsController;
