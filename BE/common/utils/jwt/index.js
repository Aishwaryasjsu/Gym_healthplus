import jsonwebtoken from 'jsonwebtoken';
import crypto from "crypto";


const privateKey = 'prviateKeyToSignJWTtoken';

const signJWT = (data) => jsonwebtoken.sign({
    data
}, privateKey, { expiresIn: 60 * 60 });

const decodeJWT = async (token) =>
    jsonwebtoken.verify(token, privateKey, {});

const createSalt = () => crypto.randomBytes(128).toString("hex");

const hashPassword = (input, salt) => {
  const hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, "sha512");
  return [salt, hashed.toString("hex")].join("$");
};

const jwt = {
    signJWT,
    decodeJWT,
    createSalt,
    hashPassword
};

export default jwt;
