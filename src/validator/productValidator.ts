import Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import validatorHandler from "../middleware/validatorHandler";


const productValidator = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body, 'from validator');
    const schema = Joi.object().keys({
        imageUrl: Joi.string(),
        productName: Joi.string(),
        productPrice: Joi.string(),
        productType: Joi.string(),
        productID: Joi.string(),
    })

    validatorHandler(req, res, schema, next);
}

export default productValidator