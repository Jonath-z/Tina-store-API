import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";


const uploadUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const data = {
        name: req.body.imageUrl,
        Email: req.body.productName,
        product_price: req.body.productPrice,
        product_type: req.body.productType,
        product_ID: req.body.productID,
    };
    
    try {
        await db.collection('products').insertOne(data);
        res.json({
            status: 200,
            message: 'image uploaded'
        });
    } catch (err) {
        if (err) {
            res.json({
                status: 500,
                message: 'uploading failed'
            });
        }
    }

    next();
}

export default uploadUser;