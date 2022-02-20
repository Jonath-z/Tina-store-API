import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";
import { hash } from '../utils/passwordUtils';


const signup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const hashedPassword = hash(req.body.password);

    const data = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    };

    try {
        await db.collection('users').insertOne(data);
        res.json({
            status: 201,
            message:'user created'
        })
    } catch {
        res.json({
            status: 400,
            message: 'user creation failed'
        });
    }
    
    next();
}

export default signup;