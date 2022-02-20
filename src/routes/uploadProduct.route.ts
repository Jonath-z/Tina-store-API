import {Router } from "express";
import uploadProducts from "../middleware/uploadProduct";
import productValidator from "../validator/productValidator";


const path = '/upload/products';
const router = Router();

router.route(path)
    .post(
        productValidator,
        uploadProducts
    )


const uploadProductRoute = {
    path,
    router
}


export default uploadProductRoute;