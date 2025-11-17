const apiResponse = {
  success(res, data, status = 200) {
    return res.status(status).json({ success: true, data });
  },
  error(res, message, status = 400) {
    return res.status(status).json({ success: false, message });
  },
};

export default apiResponse;
