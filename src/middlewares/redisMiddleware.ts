export const redisMiddleware = (redisClient) => {
  return (req, res, next) => {
    req.app.locals.redisClient = redisClient;
    next();
  };
};
