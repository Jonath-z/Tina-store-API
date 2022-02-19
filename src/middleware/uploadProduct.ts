import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";


const uploadProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = [
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-1.jpg?alt=media&token=8bf54ecb-5252-408c-8aed-ca4f2cbb5594',
            products_name: 'banana',
            products_price: '1500',
            product_type: 'fruit',
            product_ID: 'fruit_1500_banana',
        },
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-2.jpg?alt=media&token=a0384bb0-8336-4a2b-8fc6-08cc2a3d6f93',
            products_name: 'mabogi',
            products_price: '1200',
            product_type: 'legume',
            product_ID: 'legume_1200_banana',
        },
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-3.jpg?alt=media&token=9e86209e-25c8-469e-a5dc-5e7fcc1df278',
            products_name: 'viande',
            products_price: '5200',
            product_type: 'viande',
            product_ID: 'viande_5200_viande',
        },
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-4.jpg?alt=media&token=5bea5bdc-e1e3-47dc-988b-826e890d77a3',
            products_name: 'milk',
            products_price: '300',
            product_type: 'multi-nutritive',
            product_ID: 'milk_300_milk',
        },
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-5.jpg?alt=media&token=cc36f519-20e5-4885-bfd2-8af675ef46db',
            products_name: 'soja',
            products_price: '1000',
            product_type: 'multi-nutritive',
            product_ID: 'soja_1000_soja',
        },
        {
            image_url: 'https://firebasestorage.googleapis.com/v0/b/tina-store-ca2fe.appspot.com/o/product-6.jpg?alt=media&token=15c39380-af88-48aa-a0c5-78f8078ddf8a',
            products_name: 'pateque',
            products_price: '1000',
            product_type: 'fruit',
            product_ID: 'fruit_1000_soja',
        },
    ]

    data.map(async (product) => {
        try {
            await db.collection('products').insertOne(product);
            res.json({
                status: 200,
                message: 'uploaded'
            });
        } catch {
            res.json({
                status: 500,
                message: 'uploading failed'
            })
        }
    })


    next();
}

export default uploadProducts;
