import jwt from 'jsonwebtoken';

const makeToken = ({ id }) => jwt.sign(
  { id },
  process.env.MY_SECRET,
  { expiresIn: '24h' }
);

export default makeToken;

