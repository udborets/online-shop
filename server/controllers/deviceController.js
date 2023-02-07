import ApiError from '../errors/ApiError.js';
import path from "path";
import { v4 } from 'uuid';
import models from '../models/models.js';

class DeviceController {
  // creates device in db by request
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      let { img } = req.files;
      const fileName = v4() + '.jpg';
      img.mv(path.resolve(path.resolve(), "server", "..", "static", fileName))

      const newDevice = await models.Device.create({ name, price, brandId, typeId, img: fileName })
      return res.json(newDevice)
    }
    catch (err) {
      next(ApiError.badRequest(err.message))
    }
  }
  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;
    switch (!!brandId, !!typeId) {
      case (false, false):
        devices = await models.Device.findAll();
        return;
      case (false, true):
        devices = await models.Device.findAll({where: {typeId}});
        return;
      case (true, false):
        devices = await models.Device.findAll({where: {brandId}});
        return;
      case (true, true):
        devices = await models.Device.findAll();
        return;
    }
  }
  // returning one device by id in request
  async getOne(req, res) {

  }
}

export default new DeviceController;