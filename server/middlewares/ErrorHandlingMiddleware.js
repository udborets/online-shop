import ApiError from '../errors/ApiError.js';

export default (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: "Непредвиденная ошибка!" })
}