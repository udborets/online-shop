import ApiError from '../errors/ApiError.js';
import models from '../models/models.js';

class UserController {

  async registration(req, res) {

  }
  async login(req, res) {

  }
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не указан ID"))
    }
    res.json(id)
  }
}

export default new UserController;