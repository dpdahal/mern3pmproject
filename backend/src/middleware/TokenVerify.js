import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class TokenVerify {
  static async verifyToken(req, res, next) {
    let token = req.headers['authorization']
    token = token.split(' ')[1];
    if (!token) return res.status(401).send("Access Denied");
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send("Invalid Token");
    }
  }
}

export default TokenVerify;