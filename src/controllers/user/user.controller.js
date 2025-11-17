import apiResponse from "../../utils/apiResponse.js";
import userService from "../../services/user/user.service.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    return apiResponse.success(res, users);
  } catch (err) {
    next(err);
  }
};

export const getUserData = async (req, res, next) => {
  try {
    const users = await userService.getUserData(req.params.id);
    return apiResponse.success(res, users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);
    return apiResponse.success(res, newUser);
  } catch (err) {
    next(err);
  }
};
