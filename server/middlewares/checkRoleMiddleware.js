import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';

config()
export default function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }
    try {
      // headers rules are like " Bearer *token* so we split it by space"
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: "Пользователь не авторизован" })
      }
      const decoded = verify(token, process.env.JWT_KEY);
      if(decoded.role !== role) {
        return res.status(403).json({message: "Нет доступа" })
      }
      req.user = decoded;
      next()
    }
    catch (err) {
      res.status(401).json({ message: "Пользователь не авторизован" })
    }
  }
}
