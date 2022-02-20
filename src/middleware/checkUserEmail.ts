import { db } from "../database/initializeDB";
import { NextFunction, Request, Response } from 'express';

const checkUserEmail = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    const email = req.body.email
    
    const user = await db.collection('users').findOne({ email });
    console.log(user, 'from db');
    if (user) {
        res.json({
            status: 400,
            message: `${req.body.email} exist already`
        });
    } else {
        next();
    }
}

export default checkUserEmail;