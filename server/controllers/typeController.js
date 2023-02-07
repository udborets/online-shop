import models from '../models/models.js';
import ApiError from '../errors/ApiError.js';

class TypeController {
  // creates type in db by request
  async create(req, res) {
    const { name } = req.body;
    const type = await models.Type.create({ name });
    return res.json(type)
  }
  // returns all types by request
  async getAll(req, res) {
    const types = await models.Type.findAll();
    return res.json(types)
  }
}

export default new TypeController;