import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.MY_SECRET;

const makeToken = ({ payload }) => jwt.sign(
  { payload },
  secret,
  { expiresIn: '24h' }
);

export default makeToken;

