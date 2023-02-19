import ApiError from '../errors/ApiError.js';
import path from "path";
import { v4 } from 'uuid';
import models from '../models/models.js';


class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      console.log(req.files)
      let { img } = req.files;
      const fileName = v4() + '.jpg';
      img.mv(path.resolve(path.resolve(), "server", "..", "static", fileName));
      const newDevice = await models.Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach(i =>
          models.Device.create(
            {
              title: i.title,
              description: i.description,
              deviceId: newDevice.id
            }
          )
        )
      }

      return res.json(newDevice);
    }
    catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await models.Device.findAndCountAll(
        {
          limit,
          offset
        }
      )
    }
    if (!brandId && typeId) {
      devices = await models.Device.findAndCountAll(
        { where: typeId },
        limit,
        offset);
    }
    if (brandId && !typeId) {
      devices = await models.Device.findAndCountAll(
        {
          where:
            brandId
        },
        limit,
        offset
      );
    }
    if (brandId && typeId) {
      devices = await models.Device.findAndCountAll(
        {
          where:
          {
            typeId,
            brandId
          },
          limit,
          offset
        }
      );
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await models.Device.findOne(
      {
        where:
          { id },
        include:
          [{
            model:
              models.DeviceInfo,
            as: 'info'
          }]
      }
    )
    return res.json(device);
  }
}

export default new DeviceController;