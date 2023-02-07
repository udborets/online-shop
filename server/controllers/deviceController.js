import ApiError from '../errors/ApiError.js';
import path from "path";
import { v4 } from 'uuid';
import models from '../models/models.js';


class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      let { img } = req.files;
      const fileName = v4() + '.jpg';
      img.mv(path.resolve(path.resolve(), "server", "..", "static", fileName));
      console.log(req.body);
      const newDevice = await models.Device.create({ name, price, brandId, typeId, img: fileName });
      console.log(123123123);
      return res.json(newDevice);
    }
    catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;
    if (!brandId && !typeId) {
      devices = await models.Device.findAll();
    }
    if (!brandId && typeId) {
      devices = await models.Device.findAll({where: typeId});
    }
    if (brandId && !typeId) {
      devices = await models.Device.findAll({where: brandId});
    }
    if (brandId && typeId) {
      devices = await models.Device.findAll({where: {typeId, brandId}});
    }
    return res.json(devices);
  }
  async getOne(req, res) {

  }
}

export default new DeviceController;