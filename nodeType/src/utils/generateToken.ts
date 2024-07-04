import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (name: string, email: string) => {
    return jwt.sign({ name, email }, process.env.JWT_SECRET!, {
        expiresIn: '30d',
    });
};

export default generateToken;