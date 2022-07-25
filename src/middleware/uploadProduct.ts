import { Request, Response, NextFunction } from "express";
import { db } from "../database/initializeDB";

const uploadProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = {
    image_url: req.body.imageUrl,
    product_name: req.body.productName,
    product_price: req.body.productPrice,
    product_type: req.body.productType,
    product_ID: req.body.productID,
  };

  try {
    await db.collection("products").insertOne(data);
    res.json({
      status: 201,
      message: "product uploaded",
    });
    next();
  } catch (err) {
    if (err) {
      res.json({
        status: 400,
        message: "uploading failed",
      });
    }
  }
};

export default uploadProducts;
