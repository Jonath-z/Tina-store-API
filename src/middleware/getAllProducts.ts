import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";


const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        const products = await db.collection('products').find({}).toArray();
        res.json({
            status: 200,
            data: products
        })
    } catch (err) {
        if (err) {
            res.json({
                status: 500,
                message: 'failed to fetch data from database'
            })
        }
    }
    
    next();
}

export default getProducts;