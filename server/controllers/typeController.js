import models from '../models/models.js';
import ApiError from '../errors/ApiError.js';

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const newType = await models.Type.create({ name });
    return res.json(newType);
  }
  async getAll(req, res) {
    const allTypes = await models.Type.findAll();
    return res.json(allTypes);
  }
}

export default new TypeController;