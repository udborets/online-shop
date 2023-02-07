import ApiError from '../errors/ApiError.js';
import UUID from 'uuid'

class UserController {
  async registration(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    const fileName = UUID.v4() + '.jpg'
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