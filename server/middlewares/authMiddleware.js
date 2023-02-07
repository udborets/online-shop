import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';

config()

export default function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    // headers rules are like " Bearer *token* so we split it by space"
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Пользователь не авторизован" })
    }
    const decoded = verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next()
  }
  catch (err) {
    res.status(401).json({ message: "Пользователь не авторизован" })
  }
}