import { db } from '../database/initializeDB';
import { Request, Response, NextFunction } from 'express';

const getArchivedProduct= async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    const email = req.body.email;
    
    try {
        const user = await db.collection('users').findOne({ email });
        if (user) {
            res.json({
                status: 201,
                card: user.archiveCard,
            });
        }
        next();
    } catch(err){
        res.json({
            status: 400,
            error:err
        })
    }

}

export default getArchivedProduct;