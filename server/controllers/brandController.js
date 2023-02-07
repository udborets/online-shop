import models from '../models/models.js';
import ApiError from '../errors/ApiError.js';

class BrandController {
  // creates brand in db by request
  async create(req, res) {
    const { name } = req.body;
    const brand = await models.Brand.create({ name });
    return res.json(brand);
  }
  // returning all brands by request
  async getAll(req, res) {
    const brands = await models.Brand.findAll();
    return res.json(brands);
  }
}

export default new BrandController;