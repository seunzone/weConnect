import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.MY_SECRET;

const makeToken = ({ id }) => jwt.sign(
  { id },
  secret,
  { expiresIn: '240h' }
);

export default makeToken;

