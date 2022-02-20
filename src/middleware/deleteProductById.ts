import { db } from '../database/initializeDB';
import { Request, Response, NextFunction } from 'express';

const deleteProductById = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    const product_ID = req.body.productID;
  
    try {
        await db.collection('products').findOneAndDelete({ product_ID });
        res.json({
            status: 200,
            message: 'product deleted'
        });

        next();
    } catch(err){
        res.json({
            status: 400,
            message: 'product deletion failed',
            error:err
        })
    }

}

export default deleteProductById;