import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";


const signup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    try {
        await db.collection('users').insertOne(data);
        res.json({
            status: 200,
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