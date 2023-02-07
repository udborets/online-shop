import ApiError from '../errors/ApiError.js';
import path from "path";
import {v4} from 'uuid';
import models from '../models/models.js';

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      let { img } = req.files;
      // generating img filename
      const fileName = v4() + '.jpg';
      // adding img to static folder
      img.mv(path.resolve(path.resolve(), "server", "..", "static", fileName))
  
      // creating device object 
      // not setting rating because it's set to 0 by default
      const device = await models.Device.create({name, price, brandId, typeId, img: fileName})
      return res.json(device)
    } 
    catch (err) {
      next(ApiError.badRequest(err.message))
    }
  }
  async getAll(req, res) {

  }

  async getOne(req, res) {
    
  }
}

export default new DeviceController ;