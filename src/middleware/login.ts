import { db } from "../database/initializeDB";
import { NextFunction, Request, Response } from 'express';
import { compare } from '../utils/passwordUtils';

const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const email = req.body.email;
    const password = req.body.password;
    
    const user = await db.collection('users').findOne({ email });
    console.log(user, 'from db');

    if (user) {
        const isCorrectPassword = compare(password, user.password);
        if (isCorrectPassword) {
            res.json({
                status: 201,
                user: user,
                message: 'user logged in'
            });
            next();
        }
        else {
            res.json({
                status: 400,
                message: 'incorrect password'
            });
        }
    } else {
        res.json({
            status: 400,
            message: 'incorrect email'
        });
    }
}

export default login;