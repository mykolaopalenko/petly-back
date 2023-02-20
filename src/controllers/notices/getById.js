import { Notice } from "../../models/noticeModel.js";
import createError from "http-errors";
import { setSuccessResponse } from "../../helpers/setResponse.js";

export const getByIdController = async (req, res) => {
  const { noticeId } = req.params;

  const data = await Notice.findById(noticeId);
  if (!data) {
    throw new createError(404, `The notice with ID ${noticeId} does not exist`);
  }
  res.json(setSuccessResponse(200, data));
};
