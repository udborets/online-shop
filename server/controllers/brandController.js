import models from '../models/models.js';
import ApiError from '../errors/ApiError.js';

class BrandController {
  async create(req, res) {
    const { brandName } = req.body;
    const newBrand = await models.Brand.create({ brandName });
    return res.json(newBrand);
  }
  async getAll(req, res) {
    const allBrands = await models.Brand.findAll();
    return res.json(allBrands);
  }
}

export default new BrandController;