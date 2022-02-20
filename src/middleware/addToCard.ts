import { db } from '../database/initializeDB';
import { Request, Response, NextFunction } from 'express';

const addToCard = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    const email = req.body.email;
    const data = req.body.data;
    
    try {
        await db.collection('users').findOneAndUpdate({ email }, {
            $set:{
                card: [...data]
            }
        })

        res.json({
            status: 201,
            message: 'product added to card'
        });

        next();
    } catch(err){
        res.json({
            status: 400,
            message: 'uploading to card failed',
            error:err
        })
    }

}

export default addToCard;