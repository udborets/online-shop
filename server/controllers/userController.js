import ApiError from '../errors/ApiError.js';
import models from '../models/models.js';
import { hash, compareSync } from "bcrypt";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

function generateJWT(id, email, role) {
  return jwt.sign(
    {
      id,
      email,
      role
    },
    process.env.JWT_KEY,
    { expiresIn: '24h' }
  );
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    // think will replace it with a better way to check email and password
    if (!email || !email.includes('@') || !email.split('@')[1].includes('.') || email.charAt(email.length - 1) === '.') {
      return next(ApiError.badRequest("Некорректный email"));
    }
    if (!password || password.length < 5) {
      return next(ApiError.badRequest("Некорректный пароль"));
    }
    const candidate = await models.User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Пользователь с таким email уже существует"));
    }
    const hashPassword = await hash(password, 5);
    const user = await models.User.create({ email, role, password: hashPassword });
    const basket = await models.Basket.create({ userId: user.id });
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь с таким email не найден'));
    }
    let comparePassword = compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token })
  }
  async check(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({token})
  }
}

export default new UserController;