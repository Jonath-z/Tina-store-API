import { db } from '../database/initializeDB';
import { Request, Response, NextFunction } from 'express';

const archiveProduct = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    const email = req.body.email;
    const data = req.body.data;
    
    try {
        await db.collection('users').findOneAndUpdate({ email }, {
            $addToSet: {
                archiveCard: data
            }
        });
        res.json({
            status: 201,
            message: 'card Archived'
        });

        next();
    } catch(err){
        res.json({
            status: 400,
            message: 'archive failed',
            error:err
        })
    }

}

export default archiveProduct;